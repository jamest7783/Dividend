const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Thread=new Schema(
    {
        author:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        name:{type:String,required:true,default:'thread'},
        symbols:[{type:Schema.Types.ObjectId,ref:'Symbol'}],
        tags:{type:Array,required:true,default:[]},
    },
    {timestamps:true}
)
module.exports=mongoose.model('Thread',Thread)