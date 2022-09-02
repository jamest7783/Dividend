const {Schema}=require('mongoose')

const watchlistSchema=new Schema(
    {
        name:{type:String,required:true},
        symbols:{type:Array,required:true},
    },
    {timestamps:true}
)
module.exports=watchlistSchema