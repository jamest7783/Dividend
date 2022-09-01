const express=require('express')
const cors=require('cors')
const app=express()

const AppRouter=require('./routes/AppRouter')
const PORT=process.env.PORT||3002

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>res.json({message:'SQL server hit!'}))
app.use('/api',AppRouter)
app.listen(PORT,()=>console.log(`Server (SQL) started on port:${PORT}`))