const express=require('express')
const cors=require('cors')
const logger=require('morgan')

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

const PORTSQL=process.env.PORT||3002
const routes=require('./routes')

app.get('/sql',(req,res)=>res.json({message:'SQL server hit!'}))
app.use('/api',routes)
app.listen(PORTSQL,()=>console.log(
    `Express server paired with SQL started on port: ${PORTSQL}`))


