const Fund=require('../models/Fund')

const allFunds=async (req,res)=>{
    try{
        const funds=await Fund.find()
        res.status(200).json(funds)
    }catch(error){throw error}
}
const createFund=async (req,res)=>{
    try{
        const {name,icon,decription}=req.body
        const fund=await Fund.create({name,icon,decription}) 
        res.status(200).json(fund)
    }catch(error){throw error}
}
const readFund=async (req,res)=>{
    try{
        const {id}=req.params
        const fund=await Fund.findById(id)
        !fund?
        res.status(200).json({alert:`Fund with ID: ${id} not found.`}):
        res.status(200).json(fund)
    }catch(error){throw error}
}
const updateFund=async (req,res)=>{
    try{
        const {id}=req.params
        const fund=await Fund.findByIdAndUpdate(id,req.body,{new:true})
        !fund?
        res.status(200).json({alert:`Fund with ID: ${id} not found.`}):
        res.status(200).json(fund)
    }catch(error){throw error}
}
const deleteFund=async (req,res)=>{
    try{
        const {id}=req.params
        const fund=await Fund.findByIdAndDelete(id)
        !fund?
        res.status(200).json({alert:`Fund with ID: ${id} not found.`}):
        res.status(200).json({alert:`Fund with ID: ${id} deleted.`})
    }catch(error){throw error}
}



module.exports={
    createFund,
    readFund,
    allFunds,
    updateFund,
    deleteFund
}