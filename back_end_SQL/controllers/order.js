const {Equity,Order}=require('../models')


const createOrder=async (req,res)=>{
    try{
        const {portfolioId,ticker,date,quantity,price}=req.body
        let equity=await Equity.findOrCreate({where:{ticker},defaults:{ticker}})
        equity=equity[0]
        const order=await Order.create({
            date,
            quantity,
            price,
            portfolioId:portfolioId,
            equityId:equity.id
        })
        !order?
        res.status(200).jsonn({alert:'Error - Order Canceled'}):
        res.status(200).json(order)
    }catch(error){throw error}
}

module.exports={
    createOrder
}