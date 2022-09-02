const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Insight=new Schema(
    {
        author:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        text:{type:String,required:true,default:''},
        thread:{type:Schema.Types.ObjectId,ref:'Thread'},
        reactions:[{type:Schema.Types.ObjectId,ref:'Reaction'}],
        voters:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        votes:{type:Number,required:true,default:0}
    },
    {timestamps:true}
)
module.exports=mongoose.model('Insight',Insight)