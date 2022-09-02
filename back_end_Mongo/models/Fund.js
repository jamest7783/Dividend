const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Fund=new Schema(
    {
        name:{type:String,required:true,default:'fund'},
        icon:{type:String,required:true,default:'url()'},
        description:{type:String,required:true,default:' '},
        capital:{type:Number,required:true,default:0},
        investors:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        portfolios:{type:Array,required:true,default:[]},
    },
    {timestamps:true}
)
module.exports=mongoose.model('Fund',Fund)