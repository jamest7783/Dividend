const mongoose=require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:/27017/dividendsMongoDB')
    .then(()=>{console.log('Successful Connection to MongoDB')})
    .catch((e)=>{console.error('Bad Connection to MongoDB, Error:',e.message)})
const db=mongoose.connection
module.exports=db
