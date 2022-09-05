const {Portfolio,Position,Symbol,Trade}=require('../models')
const position = require('../models/position')

const createPortfolio=async (req,res)=>{
    try{
        const {name,description,capital}=req.body 
        const portfolio=await Portfolio.create({
            name,
            description,
            capital
        })
        res.status(200).json(portfolio)
    }catch(error){throw error}
}
const readPortfolio=async (req,res)=>{
    try{
        const {pk}=req.params
        const portfolio=await Portfolio.findByPk(pk)
        !portfolio?
        res.status(200).json({alert:`Portfolio with PK: ${pk} not found.`}):
        res.status(200).json(portfolio)
    }catch(error){throw error}
}
const updatePortfolio=async (req,res)=>{
    try{
        const {pk}=req.params
        const portfolio=await Portfolio.update({...req.body},{where:{id:pk},returning:true})
        !portfolio?
        res.status(200).json({alert:`Portfolio with PK: ${pk} not found.`}):
        res.status(200).json(portfolio)
    }catch(error){throw error}
}
const deletePortfolio=async (req,res)=>{
    try{
        const {pk}=req.params
        const portfolio=await Portfolio.findByPk(pk)
        !portfolio?
        res.status(200).json({alert:`Portfolio with PK: ${pk} not found.`}):
        await Portfolio.destroy({where:{id:pk}})
        res.status(200).json({alert:`Portfolio with PK: ${pk} deleted.`})
    }catch(error){throw error}
}



const createTrade=async (req,res)=>{
    const {portfolioId,pos,type,shares}=req.body

    const positions=await Position.findOrCreate({where:{portfolioId},defaults:{portfolioId}})
    positions.map((pos)=>{
        if(position.)
    })



    const symbol=await Symbol.findOrCreate({where:{symbol},defaults:{symbol}})



   



    res.status(200).json(position)





    /*
    let position=await Position.findOrCreate({
        where:{portfolioId},
        defaults:{portfolioId,symbol,qauntity,side}
    })
    */
    /*
    let equity=await Symbol.find({where:{symbol}})
    if(!equity){equity=await Symbol.create({symbol,company,icon,value})}

    let position=await Position.findAll({where:{portfolioId,symbolId}})
    if(!position){position=await Position.create({portfolioId})}

    let trade=await Trade.create({
        symbolId,positionId,
        
        shares,
        entryTime,
        exitTime:null,
        entryPrice:symbol.value,
        exitPrice:null,
    })
    */
}


module.exports={
    createPortfolio,
    readPortfolio,
    updatePortfolio,
    deletePortfolio,
    createTrade
}



