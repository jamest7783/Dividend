const middleware=require('../middleware')
const Investor=require('../models/Investor')
const Watchlist=require('../models/Watchlist')

const register=async (req,res)=>{
    try{
        const {first_name,last_name,user_name,email,icon,portfolios,location,capital,initialPassword}=req.body
        let digest=await middleware.hash(initialPassword)
        const investor=await Investor.create({
            first_name,
            last_name,
            user_name,
            email,
            icon,
            location,
            capital,
            portfolios,
            passwordDigest:digest
        })
        const watchlist=await Watchlist.create({
            creator:investor.id,
            symbols:['TSLA','AAPL','GME'],
            followers:[investor.id]
        })
        investor.watchlists.push(watchlist.id)
        investor.save()
        res.status(200).json(investor)
    }catch(error){throw error}
}
const login=async (req,res)=>{
    try{
        const {email,passwordInput}=req.body
        const investor=await Investor.findOne({email,raw:true})
        if(investor && (await middleware.compare(passwordInput,investor.passwordDigest))){
            let payload={id:investor.id,email:investor.email}
            let token=middleware.createToken(payload)
            res.status(200).json({investor:{...investor._doc,payload,token}})
        }else{res.status(401).json({alert:'Unauthorized/Incorrect Password'})}
    }catch(error){throw error}
}
const checkSession=async (req,res)=>{
    const {payload}=res.locals
    res.status(200).json(payload)
}
const updatePassword=async (req,res)=>{
    try{
        const {email,oldPassword,newPassword}=req.body
        const investor=await Investor.findOne({email,raw:true})
        if(investor && (await middleware.compare(oldPassword,investor.passwordDigest))){
            let digest=await middleware.hash(newPassword)
            await investor.update({passwordDigest:digest})
            res.status(200).json({alert:'Successful Password Update'})
        }
        else{res.status(401).json({alert:'Unauthorized/Incorrect Password'})}
    }catch(error){throw error}
}
const allInvestors=async (req,res)=>{
    try{
        const investors=await Investor.find()
        res.status(200).json(investors)
    }catch(error){throw error}
}
const readInvestor=async (req,res)=>{
    try{
        const {id}=req.params
        const investor=await Investor.findById(id)
        !investor?
        res.status(200).json({alert:`Investor with ID: ${id} not found.`}):
        res.status(200).json(investor)
    }catch(error){throw error}
}
const updateInvestor=async (req,res)=>{
    try{
        const {id}=req.params
        const investor=await Investor.findByIdAndUpdate(id,req.body,{new:true})
        !investor?
        res.status(200).json({alert:`Investor with ID: ${id} not found.`}):
        res.status(200).json(investor)
    }catch(error){throw error}
}
const deleteInvestor=async (req,res)=>{
    try{
        const {id}=req.params
        const investor=await Investor.findByIdAndDelete(id)
        !investor?
        res.status(200).json({alert:`Investor with ID: ${id} not found.`}):
        res.status(200).json({alert:`Investor with ID: ${id} deleted.`})
    }catch(error){throw error}
}

module.exports={
    
    register,
    login,
    checkSession,
    updatePassword,

    allInvestors,
    readInvestor,
    updateInvestor,
    deleteInvestor
}

