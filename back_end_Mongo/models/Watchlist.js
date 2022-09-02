const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Watchlist=new Schema(
    {
        creator:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        name:{type:String,required:true,default:'watchlist'},
        symbols:{type:Array,required:true,default:[]},
        followers:[{type:Schema.Types.ObjectId,ref:'Investor'}]
    },
    {timestamps:true}
)
module.exports=mongoose.model('Watchlist',Watchlist)