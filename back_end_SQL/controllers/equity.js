const yahooFinance=require('yahoo-finance')
const {Equity,Quote}=require('../models')

const getHistorical=async (req,res)=>{
    try{
        const {ticker,period}=req.body
        const equity=await Equity.findOrCreate({where:{ticker}})
        const to=new Date().toISOString().slice(0, 10)
        const from=(parseInt(to.substring(0,4))-1).toString()+to.substring(4,to.length)
        const history=await yahooFinance.historical({symbol:equity[0].ticker,from,to,period})
        for(let period of history){
            let {date,open,high,low,close,volume}=period
            date=parseInt(date.toISOString().substring(0,10).replaceAll('-',''))
            await Quote.create({
                equityId:equity[0].id,date,open,high,low,close,volume
            })
        }
        res.status(200).json(history)
    }catch(error){throw error}
}

module.exports={
    getHistorical
}



