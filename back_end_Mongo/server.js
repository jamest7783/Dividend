const express=require('express')
const cors=require('cors')
const logger=require('morgan')

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
app.use(express.static(`${__dirname}/client/build`))

const PORTMONGO=process.env.PORT||3001
const db=require('./db')
const routes=require('./routes')

app.get('/mongo',(req,res)=>res.json({message:'Mongo server hit!'}))
app.use('/api',routes)
app.get('/*', (req,res) => {res.sendFile(`${__dirname}/client/build/index.html`)})
app.listen(PORTMONGO,()=>{console.log(`Express server paired with Mongo listening on port: ${PORTMONGO}`)})


 

