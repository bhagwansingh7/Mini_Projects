const express=require('express')
const app=express()
require('dotenv').config()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send({
        message:'container is running'
    })
})
const PORT=process.env.PORT
app.get('/data',(req,res)=>{
    res.json({message:"here is data"})
})
app.listen(PORT,()=>{
    console.log(`app is running on port ${5000}`);
})