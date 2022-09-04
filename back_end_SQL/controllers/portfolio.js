const {Portfolio}=require('../models')

const createPortfolio=async (req,res)=>{
    try{
        console.log(Portfolio)
        const {name,description,capital}=req.body 
        const portfolio=await Portfolio.create({name,description,capital})
        res.status(200).json(portfolio)
    }catch(error){throw error}
}




module.exports={
    createPortfolio
}



