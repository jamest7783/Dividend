const mongoose=require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/dividends_mongo')
    .then(()=>{console.log('Successful connection to mongo')})
    .catch((e)=>{console.error('Bad connection to mongo... Error:',e.message)})
const db=mongoose.connection
module.exports=db
