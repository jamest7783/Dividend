const mongoose=require('mongoose')
const dbUrl=
    process.env.NODE_ENV==='production'?
    process.env.MONGO_URI:
    'mongodb://127.0.0.1:27017/dividends_mongo'

mongoose
    .connect(dbUrl)
    .then(()=>{console.log('Successful connection to MongoDB')})
    .catch((e)=>{console.error('Bad connection to MongoDB... Error:',e.message)})

mongoose.set('debug',true)
const db=mongoose.connection
module.exports=db
