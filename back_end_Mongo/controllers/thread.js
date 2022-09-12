const Thread=require('../models/Thread')

const allThreads=async (req,res)=>{
    try{
        const threads=await Thread.find()
        res.status(200).json(threads)
    }catch(error){throw error}
}
const createThread=async (req,res)=>{
    try{
        const {author,name,symbols,tags,textBody}=req.body
        const thread=await Thread.create({author,name,symbols,tags,textBody}) 
        res.status(200).json(thread)
    }catch(error){throw error}
}
const readThread=async (req,res)=>{
    try{
        const {id}=req.params
        const thread=await Thread.findById(id)
        !thread?
        res.status(200).json({alert:`Thread with ID:${id} not found.`}):
        res.status(200).json(thread)
    }catch(error){throw error}
}
const updateThread=async (req,res)=>{
    try{
        const {id}=req.params
        const thread=await Thread.findByIdAndUpdate(id,req.body,{new:true})
        !thread?
        res.status(200).json({alert:`Thread with ID:${id} not found.`}):
        res.status(200).json(thread)
    }catch(error){throw error}
}
const deleteThread=async (req,res)=>{
    try{
        const {id}=req.params
        const thread=await Thread.findByIdAndDelete(id)
        !thread?
        res.status(200).json({alert:`Thread with ID:${id} not found.`}):
        res.status(200).json({alert:`Thread with ID:${id} deleted.`})
    }catch(error){throw error}
}

module.exports={
    allThreads,
    createThread,
    readThread,
    updateThread,
    deleteThread
}