const {Equity,Order,Portfolio}=require('../models')

const createOrder=async (req,res)=>{
    try{
        const {date,numShares,pricePerShare,portfolioId,ticker}=req.body
        let equity=await Equity.findOrCreate({where:{ticker},defaults:{ticker}})
        equity=equity[0]
        const portfolio=await Portfolio.findByPk(portfolioId)
        if(portfolio.capital>(pricePerShare*numShares)){
            try{
                portfolio.capital-=(pricePerShare*numShares)
                portfolio.save()
                const order=await Order.create({
                    date,numShares,pricePerShare,portfolioId,equityId:equity.id
                })
                return res.status(200).json(order)
            }catch{return res.status(200).json({alert:'Error - Order Canceled'})}
        }
        return res.status(200).json({alert:'Insufficient Funds - Order Canceled'})
    }catch(error){throw error}
}

module.exports={
    createOrder
}