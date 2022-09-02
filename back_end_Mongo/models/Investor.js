const {Schema}=require('mongoose')

const investorSchema=new Schema(
    {
        first_name:{type:String,required:true},
        last_name:{type:String,required:true},
        email:{type:String,required:true},
        icon:{type:String,required:true},
        passwordDigest:{type:String,required:true},
        location:{type:String,required:true},
        capital:{type:Number,required:true},
        reputation:{type:Number,required:true},
        portfolios:{type:Array,required:true},
        funds:[{type:Schema.Types.ObjectId,ref:'Fund'}],
        threads:[{type:Schema.Types.ObjectId,ref:'Thread'}],
        insights:[{type:Schema.Types.ObjectId,ref:'Insight'}],
        watchlists:[{type:Schema.Types.ObjectId,ref:'Watchlist'}],
        followers:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        following:[{type:Schema.Types.ObjectId,ref:'Investor'}],
    },
    {timestamps:true}
)
module.exports=investorSchema