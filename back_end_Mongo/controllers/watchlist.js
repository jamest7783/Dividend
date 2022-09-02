const Watchlist=require('../models/Watchlist')

const createWatchlist=async (req,res)=>{
    try{
        const {name,symbols}=req.body
        const watchlist=await Watchlist.create({name,symbols})
        res.status(200).json(watchlist)
    }catch(error){throw error}

}
const readWatchlist=async (req,res)=>{
    try{
        const {id}=req.params
        const watchlist=Watchlist.findById(id)
        !watchlist[0]?
        res.status(200).json({alert:`Watchlist with ID:${id} not found.`}):
        res.status(200).json(watchlist)
    }catch(error){throw error}
}
const updateWatchlist=async (req,res)=>{
    try{
        const {id}=req.params
        const watchlist=Watchlist.findByIdAndUpdate(id,req.body,{new:true})
        !watchlist[0]?
        res.status(200).json({alert:`Watchlist with ID:${id} not found.`}):
        res.status(200).json(watchlist)
    }catch(error){throw error}
}
const deleteWatchlist=async (req,res)=>{
    try{
        const {id}=req.params
        const watchlist=Watchlist.findByIdAndDelete(id)
        !watchlist[0]?
        res.status(200).json({alert:`Watchlist with ID:${id} not found.`}):
        res.status(200).json({alert:`Watchlist with ID:${id} deleted.`})
    }catch(error){throw error}
}

module.exports={
    createWatchlist,
    readWatchlist,
    updateWatchlist,
    deleteWatchlist
}