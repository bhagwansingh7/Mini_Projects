const mysql=require('mysql2/promise')
console.log(process.env.DB_USER)
console.log(process.env.DB_PORT)
console.log(process.env.DB_NAME)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PASSWORD)
const pool=mysql.createPool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME

})

const db=async()=>{
    try {
        const conn=await pool.getConnection();
        console.log('dtabase connected successfully')
        conn.release()
    } catch (error) {
        console.log('database error',error)
    }
}
db();

module.exports=pool