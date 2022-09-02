const {Schema}=require('mongoose')

const fundSchema=new Schema(
    {
        name:{type:String,required:true},
        icon:{type:String,required:true},
        description:{type:String,required:true},
        capital:{type:Number,required:true},
        investors:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        portfolios:{type:Array,required:true},
    },
    {timestamps:true}
)
module.exports=fundSchema