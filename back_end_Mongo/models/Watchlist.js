const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Watchlist=new Schema(
    {
        name:{type:String,required:true},
        symbols:{type:Array,required:true},
    },
    {timestamps:true}
)
module.exports=mongoose.model('Watchlist',Watchlist)