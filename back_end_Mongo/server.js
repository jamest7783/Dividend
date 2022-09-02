const express=require('express')
const cors=require('cors')
const logger=require('morgan')
const PORT=process.env.PORT||3001
const db=require('./db')
const app=express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.get('/',(req,res)=>{res.send('Hit mongo!')})
app.listen(PORT,()=>{console.log(`Express server (mongo) listening on port: ${PORT}`)})