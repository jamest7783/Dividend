const express=require('express')
const cors=require('cors')
const app=express()

const AppRouter=require('./routes/AppRouter')
const PORTSQL=process.env.PORT||3002

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>res.json({message:'SQL server hit!'}))
app.use('/api',AppRouter)
app.listen(PORTSQL,()=>console.log(
    `Express server paired with SQL started on port: ${PORTSQL}`))


