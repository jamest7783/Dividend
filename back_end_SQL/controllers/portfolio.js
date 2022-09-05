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

    const {portfolioId,ticker}=req.body

    let symbol=await Symbol.findOrCreate({where:{symbol:ticker},defaults:{symbol:ticker}}) 
    symbol=symbol[0]
    const positions=await Position.findAll({where:{portfolioId}})
    let position=positions[0]
    const trades=await Trade.findAll({where:{symbolId:symbol.id}})


    res.status(200).json({symbol,position,trades})








    // const positions=await Position.findOrCreate({where:{portfolioId},defaults:{portfolioId}})
    // let position=positions[0]
    // const symbols=await Symbol.findOrCreate({where:{symbol:ticker},defaults:{symbol:ticker}})
    // let symbol=symbols[0]
    // const trade=await Trade.create({
    //     positionId:position.id,
    //     symbolId:symbol.id
    // })
    
    





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



