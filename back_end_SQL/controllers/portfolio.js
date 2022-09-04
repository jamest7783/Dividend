const {Portfolio}=require('../models')

/*
create a portfolio
read a portfolio
update a portfolio
delete a portfolio
*/



const createPortfolio=async (req,res)=>{
    try{
        const {name,description,capital}=req.body 
        const portfolio=await Portfolio.create({name,description,capital})
        res.status(200).json(portfolio)
    }catch(error){throw error}
}




module.exports={
    createPortfolio
}



