const Reaction=require('../models/Reaction')

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
        const reaction=Reaction.findById(id)
        !reaction[0]?
        res.status(200).json({alert:`Reaction with ID:${id} not found.`}):
        res.status(200).json(reaction)
    }catch(error){throw error}
}
const updateReaction=async (req,res)=>{
    try{
        const {id}=req.params
        const reaction=Reaction.findByIdAndUpdate(id,req.body,{new:true})
        !reaction[0]?
        res.status(200).json({alert:`Reaction with ID:${id} not found.`}):
        res.status(200).json(reaction)
    }catch(error){throw error}
}
const deleteReaction=async (req,res)=>{
    try{
        const {id}=req.params
        const reaction=Reaction.findByIdAndDelete(id)
        !reaction[0]?
        res.status(200).json({alert:`Reaction with ID:${id} not found.`}):
        res.status(200).json({alert:`Reaction with ID:${id} deleted.`})
    }catch(error){throw error}
}

module.exports={
    createReaction,
    readReaction,
    updateReaction,
    deleteReaction
}