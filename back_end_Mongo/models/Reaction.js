const {Schema}=require('mongoose')

const reactionSchema=new Schema(
    {
        image:{type:String,required:true},
        investor:[{type:Schema.Types.ObjectId,ref:'Investor'}],
    },
    {timestamps:true}
)
module.exports=reactionSchema