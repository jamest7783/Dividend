const express=require('express')
const cors=require('cors')
const logger=require('morgan')
const PORTMONGO=process.env.PORT||3001
const db=require('./db')
const app=express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.get('/mongo',(req,res)=>{res.send('Hit Mongo!')})
app.listen(PORTMONGO,()=>{console.log(
    `Express server paired with Mongo listening on port: ${PORTMONGO}`)})
 