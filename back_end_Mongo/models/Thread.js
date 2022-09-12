const mongoose=require('mongoose')
const {Schema}=require('mongoose')

const Thread=new Schema(
    {
        author:[{type:Schema.Types.ObjectId,ref:'Investor'}],
        name:{type:String,default:'thread'},
        textBody:{type:String,default:''},
        symbol:{type:String,default:''},
        tag:{type:String,default:''},
    },
    {timestamps:true}
)
module.exports=mongoose.model('Thread',Thread)