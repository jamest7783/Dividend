const {Schema}=require('mongoose')

const insightSchema=new Schema(
    {
        text:{type:String,required:true},
        thread:{type:Schema.Types.ObjectId,ref:'Thread'},
        reactions:[{type:Schema.Types.ObjectId,ref:'Reaction'}],
        voters:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        votes:{type:Number,required:true}
    },
    {timestamps:true}
)
module.exports=insightSchema