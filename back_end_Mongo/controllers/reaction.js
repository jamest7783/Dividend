const Reaction=require('../models/Reaction')

const allReactions=async (req,res)=>{
    try{
        const reactions=await Reaction.find()
        res.status(200).json(reactions)
    }catch(error){throw error}
}
const createReaction=async (req,res)=>{
    try{
        const {image}=req.body
        const reaction=await Reaction.create({image}) 
        res.status(200).json(reaction)
    }catch(error){throw error}
}
const readReaction=async (req,res)=>{
    try{
        const {id}=req.params
        const reaction=await Reaction.findById(id)
        !reaction?
        res.status(200).json({alert:`Reaction with ID: ${id} not found.`}):
        res.status(200).json(reaction)
    }catch(error){throw error}
}
const updateReaction=async (req,res)=>{
    try{
        const {id}=req.params
        const reaction=await Reaction.findByIdAndUpdate(id,req.body,{new:true})
        !reaction?
        res.status(200).json({alert:`Reaction with ID: ${id} not found.`}):
        res.status(200).json(reaction)
    }catch(error){throw error}
}
const deleteReaction=async (req,res)=>{
    try{
        const {id}=req.params
        const reaction=await Reaction.findByIdAndDelete(id)
        !reaction?
        res.status(200).json({alert:`Reaction with ID: ${id} not found.`}):
        res.status(200).json({alert:`Reaction with ID: ${id} deleted.`})
    }catch(error){throw error}
}

module.exports={
    allReactions,
    createReaction,
    readReaction,
    updateReaction,
    deleteReaction
}