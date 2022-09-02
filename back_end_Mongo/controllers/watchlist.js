const Watchlist=require('../models/Watchlist')

const createWatchlist=async (req,res)=>{
    const {name,symbols}=req.body
    const watchlist=await Watchlist.create({name,symbols})
    res.status(200).json(watchlist)
}





module.exports={
    createWatchlist
}