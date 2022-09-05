const {Position}=require('../models/')

const createPosition=async (req,res)=>{
    try{
        const {value,type,shares,portfolioId}=req.body 
        const position=await Position.create({
            position:value,
            type,
            shares,
            portfolioId
        })
        res.status(200).json(position)
    }catch(error){throw error}
}
const readPosition=async (req,res)=>{
    try{
        const {pk}=req.params
        const position=await Position.findByPk(pk)
        !position?
        res.status(200).json({alert:`Position with PK: ${pk} not found.`}):
        res.status(200).json(position)
    }catch(error){throw error}
}
const updatePosition=async (req,res)=>{
    try{
        const {pk}=req.params 
        const position=await Position.update({...req.body},{where:{id:pk},returning:true})
        !position?
        res.status(200).json({alert:`Position with PK: ${pk} not found.`}):
        res.status(200).json(position)
    }catch(error){throw error}
}
const deletePosition=async (req,res)=>{
    try{
        const {pk}=req.params
        const position=await Position.findByPk(pk)
        !position?
        res.status(200).json({alert:`Position with PK: ${pk} not found.`}):
        await Position.destroy({where:{id:pk}})
        res.status(200).json({alert:`Position with PK: ${pk} deleted.`})
    }catch(error){throw error}
}

module.exports={
    createPosition,
    readPosition,
    updatePosition,
    deletePosition
}