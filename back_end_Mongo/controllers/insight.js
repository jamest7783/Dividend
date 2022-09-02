const Insight=require('../models/Insight')

const createInsight=async (req,res)=>{
    try{
        const {text,thread,reactions,voters,votes}=req.body
        const insight=await Insight.create({text,thread,reactions,voters,votes}) 
        res.status(200).json(insight)
    }catch(error){throw ersror}
}
const readInsight=async (req,res)=>{
    try{
        const {id}=req.params
        const insight=Insight.findById(id)
        !insight[0]?
        res.status(200).json({alert:`Insight with ID:${id} not found.`}):
        res.status(200).json(insight)
    }catch(error){throw error}
}
const updateInsight=async (req,res)=>{
    try{
        const {id}=req.params
        const insight=Reaction.findByIdAndUpdate(id,req.body,{new:true})
        !insight[0]?
        res.status(200).json({alert:`Insight with ID:${id} not found.`}):
        res.status(200).json(insight)
    }catch(error){throw error}
}
const deleteInsight=async (req,res)=>{
    try{
        const {id}=req.params
        const insight=Insight.findByIdAndDelete(id)
        !insight[0]?
        res.status(200).json({alert:`Insight with ID:${id} not found.`}):
        res.status(200).json({alert:`Insight with ID:${id} deleted.`})
    }catch(error){throw error}
}

module.exports={
    createInsight,
    readInsight,
    updateInsight,
    deleteInsight
}