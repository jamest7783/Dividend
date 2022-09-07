const yahooFinance=require('yahoo-finance')
const {Equity}=require('../models')

const getHistorical=async (req,res)=>{
    const {ticker,period}=req.body
    const equity=await Equity.findOrCreate({where:{ticker}})
    const to=new Date().toISOString().slice(0, 10)
    const from=(parseInt(to.substring(0,4))-1).toString()+to.substring(4,to.length)
    const history=await yahooFinance.historical({symbol:equity[0].ticker,from,to,period})
    res.status(200).json(history)
}

module.exports={
    getHistorical
}



