const {Equity,Order,Portfolio}=require('../models')


const createOrder=async (req,res)=>{
    try{
        const {date,numShares,pricePerShare,portfolioId,ticker}=req.body
        let equity=await Equity.findOrCreate({where:{ticker},defaults:{ticker}})
        equity=equity[0]
        const portfolio=await Portfolio.findByPk(portfolioId)
        
        if(portfolio.capital<(pricePerShare*numShares)){
            return res.status(200).json({alert:'Insufficient Funds - Order Canceled'})
        }else{
            portfolio.capital-=(pricePerShare*numShares)
            portfolio.save()

            const order=await Order.create({
                date,numShares,pricePerShare,portfolioId,equityId:equity.id
            })




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
        res.status(200).json({alert:'Error - Order Canceled'}):
        res.status(200).json(order)
    }catch(error){throw error}
}

module.exports={
    createOrder
}