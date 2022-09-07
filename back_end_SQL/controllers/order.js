const {Equity,Order,Portfolio}=require('../models')


const createOrder=async (req,res)=>{
    try{
        const {portfolioId,ticker,date,quantity,price}=req.body
        let equity=await Equity.findOrCreate({where:{ticker},defaults:{ticker}})
        equity=equity[0]
        const portfolio=await Portfolio.findByPk(portfolioId)
        
        if(portfolio.capital<(price*quantity)){
            return res.status(200).json({alert:'Insufficient Funds'})
        }else{
            portfolio.capital-=(quantity*price)
            portfolio.save()
            return res.status(200).json(portfolio.capital)
        }


        const order=await Order.create({
            date,               // will be most recent date on daily chart
            quantity,           // chosen with form
            price,              // passed from chart data
            portfolioId,        // passed from state 
            equityId:equity.id  // passed from chart data/state 
        })
        !order?
        res.status(200).jsonn({alert:'Error - Order Canceled'}):
        res.status(200).json(order)
    }catch(error){throw error}
}

module.exports={
    createOrder
}