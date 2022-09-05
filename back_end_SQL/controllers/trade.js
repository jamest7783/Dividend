const {Trade}=require('../models')

const createTrade=async (req,res)=>{
    try{
        const {value,type,shares,portfolioId}=req.body 
        const trade=await Trade.create({
            position:value,
            type,
            shares,
            portfolioId
        })
        res.status(200).json(trade)
    }catch(error){throw error}
}
const readTrade=async (req,res)=>{
    try{
        const {pk}=req.params
        const trade=await Trade.findByPk(pk)
        !trade?
        res.status(200).json({alert:`Trade with PK: ${pk} not found.`}):
        res.status(200).json(trade)
    }catch(error){throw error}
}
const updateTrade=async (req,res)=>{
    try{
        const {pk}=req.params 
        const trade=await Trade.update({...req.body},{where:{id:pk},returning:true})
        !trade?
        res.status(200).json({alert:`Trade with PK: ${pk} not found.`}):
        res.status(200).json(trade)
    }catch(error){throw error}
}
const deleteTrade=async (req,res)=>{
    try{
        const {pk}=req.params
        const trade=await Trade.findByPk(pk)
        !trade?
        res.status(200).json({alert:`Trade with PK: ${pk} not found.`}):
        await Trade.destroy({where:{id:pk}})
        res.status(200).json({alert:`Trade with PK: ${pk} deleted.`})
    }catch(error){throw error}
}

module.exports={
    createTrade,
    readTrade,
    updateTrade,
    deleteTrade
}