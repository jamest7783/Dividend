const {Equity,Order,Portfolio}=require('../models')


const createOrder=async (req,res)=>{
    const {pk}=req.params
    const {ticker,date,quantity,price}=req.body

    const portfolio=await Portfolio.findByPk(pk)

    let equity=await Equity.findOrCreate({where:{ticker},defaults:{ticker}})
    equity=equity[0]
    
    const order=await Order.create({
        date,
        quantity,
        price,
        portfolioId:portfolio.id,
        equityId:equity.id

    })
    res.status(200).json(order)
}

module.exports={
    createOrder
}