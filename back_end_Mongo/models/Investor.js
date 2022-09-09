const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Investor=new Schema(
    {
        first_name:{type:String,required:true,default:'first'},
        last_name:{type:String,required:true,default:'last'},
        user_name:{type:String,required:true},
        email:{type:String,required:true},
        icon:{type:String,required:true,default:'url()'},
        passwordDigest:{type:String,required:true,default:'needs to be changed (NO AUTH YET)'},
        location:{type:String},
        capital:{type:Number,required:true,default:0},
        reputation:{type:Number,required:true,default:10},
        portfolios:{type:Array,required:true,default:[]},
        funds:[{type:Schema.Types.ObjectId,ref:'Fund'}],
        threads:[{type:Schema.Types.ObjectId,ref:'Thread'}],
        insights:[{type:Schema.Types.ObjectId,ref:'Insight'}],
        watchlists:[{type:Schema.Types.ObjectId,ref:'Watchlist'}],
        followers:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        following:[{type:Schema.Types.ObjectId,ref:'Investor'}],
    },
    {timestamps:true}
)
module.exports=mongoose.model('Investor',Investor)