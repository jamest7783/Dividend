const Investor=require('../models/Investor')

const allInvestors=async (req,res)=>{
    try{
        const investors=await Investor.find()
        res.status(200).json(investors)
    }catch(error){throw error}
}
const createInvestor=async (req,res)=>{
    try{
        const {first_name,last_name,email,icon,password,location,capital}=req.body
        const investor=await Investor.create({first_name,last_name,email,icon,password,location,capital}) 
        res.status(200).json(investor)
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
    allInvestors,
    createInvestor,
    readInvestor,
    updateInvestor,
    deleteInvestor
}

