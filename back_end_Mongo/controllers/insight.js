const Insight=require('../models/Insight')

const allInsights=async (req,res)=>{
    try{
        const insights=await Insight.find()
        res.status(200).json(insights)
    }catch(error){throw error}
}
const createInsight=async (req,res)=>{
    try{
        const {author,text,thread,reactions,voters,votes}=req.body
        const insight=await Insight.create({author,text,thread,reactions,voters,votes}) 
        res.status(200).json(insight)
    }catch(error){throw error}
}
const readInsight=async (req,res)=>{
    try{
        const {id}=req.params
        const insight=await Insight.findById(id)
        !insight?
        res.status(200).json({alert:`Insight with ID: ${id} not found.`}):
        res.status(200).json(insight)
    }catch(error){throw error}
}
const updateInsight=async (req,res)=>{
    try{
        const {id}=req.params
        const insight=await Insight.findByIdAndUpdate(id,req.body,{new:true})
        !insight?
        res.status(200).json({alert:`Insight with ID: ${id} not found.`}):
        res.status(200).json(insight)
    }catch(error){throw error}
}
const deleteInsight=async (req,res)=>{
    try{
        const {id}=req.params
        const insight=await Insight.findByIdAndDelete(id)
        !insight?
        res.status(200).json({alert:`Insight with ID: ${id} not found.`}):
        res.status(200).json({alert:`Insight with ID: ${id} deleted.`})
    }catch(error){throw error}
}

module.exports={
    allInsights,
    createInsight,
    readInsight,
    updateInsight,
    deleteInsight
}