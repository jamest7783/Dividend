const yahooFinance=require('yahoo-finance')
const {Equity,Quote}=require('../models')


const readQuotes=async (req,res)=>{
    const {pk}=req.params
    const equity=await Equity.findByPk(pk)
    const to=new Date().toISOString().slice(0, 10)
    const from=(parseInt(to.substring(0,4))-1).toString()+to.substring(4,to.length)

    from=to.substring


    await yahooFinance.historical({
        symbol:equity.ticker,
        from,to,period:'w'
    },(error,quotes)=>{
        if(error){throw error}
        else if(!quotes[0]){res.status(200).json({alert:'Ticker & Ticker Quotes not found.'})}
        else{

  
            
            
            
 
            res.status(200).json(from)
        }
    })
}

module.exports={
    readQuotes
}


