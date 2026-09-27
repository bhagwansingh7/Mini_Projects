const express =require('express')
const app=express()
const env=require('dotenv').config()
const pool=require('./config/db')

console.log(process.env.PORT)
const PORT=process.env.PORT||4000;
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello from server")

})
app.get('/allusers',async(req,res)=>{
    try {
        const [users]=await pool.execute('select * from students');
        res.json({
            message:'all users data',
            users

        })
        
    } catch (error) {
        res.send(error)
    }
})
app.get('/post-data',(req,res)=>{
    res.json({
        message:'this is me as a friend'
    
    })
})
app.get('/mydata',(req,res)=>{
    res.send("mydata")
})
app.get('/home',(req,res)=>{
    res.send(`<h1>hello from server</h1>`)
})

app.listen(PORT,()=>{
    console.log(`app is running on PORT ${PORT}`)
})

// module.exports=app