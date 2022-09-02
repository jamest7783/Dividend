const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Reaction=new Schema(
    {
        image:{type:String,required:true},
        investor:[{type:Schema.Types.ObjectId,ref:'Investor'}],
    },
    {timestamps:true}
)
module.exports=mongoose.model('Reaction',Reaction)