const {Symbol}=require('../models')

const createSymbol=async (req,res)=>{
    try{
        const {sym,company,icon,value}=req.body 
        const symbol=await Symbol.create({
            symbol:sym,
            company,
            icon,
            value
        })
        res.status(200).json(symbol)
    }catch(error){throw error}
}
const readSymbol=async (req,res)=>{
    try{
        const {pk}=req.params
        const symbol=await Symbol.findByPk(pk)
        !symbol?
        res.status(200).json({alert:`Symbol with PK: ${pk} not found.`}):
        res.status(200).json(symbol)
    }catch(error){throw error}
}
const updateSymbol=async (req,res)=>{
    try{
        const {pk}=req.params 
        const symbol=await Symbol.update({...req.body},{where:{id:pk},returning:true})
        !symbol?
        res.status(200).json({alert:`Symbol with PK: ${pk} not found.`}):
        res.status(200).json(symbol)
    }catch(error){throw error}
}
const deleteSymbol=async (req,res)=>{
    try{
        const {pk}=req.params
        const symbol=await Symbol.findByPk(pk)
        !symbol?
        res.status(200).json({alert:`Symbol with PK: ${pk} not found.`}):
        await Symbol.destroy({where:{id:pk}})
        res.status(200).json({alert:`Symbol with PK: ${pk} deleted.`})
    }catch(error){throw error}
}

module.exports={
    createSymbol,
    readSymbol,
    updateSymbol,
    deleteSymbol
}