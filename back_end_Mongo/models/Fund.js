const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Fund=new Schema(
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
module.exports=mongoose.model('Fund',Fund)