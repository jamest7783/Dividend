let googleNewsAPI=require('google-news-json')
const Watchlist=require('../models/Watchlist')


const allWatchlists=async (req,res)=>{
    try{
        const watchlists=await Watchlist.find()
        res.status(200).json(watchlists)
    }catch(error){throw error}

}
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
        const watchlist=await Watchlist.findById(id)
        !watchlist?
        res.status(200).json({alert:`Watchlist with ID: ${id} not found.`}):
        res.status(200).json(watchlist)
    }catch(error){throw error}
}
const updateWatchlist=async (req,res)=>{
    try{
        const {id}=req.params
        const watchlist=await Watchlist.findByIdAndUpdate(id,req.body,{new:true})
        !watchlist?
        res.status(200).json({alert:`Watchlist with ID: ${id} not found.`}):
        res.status(200).json(watchlist)
    }catch(error){throw error}
}
const deleteWatchlist=async (req,res)=>{
    try{
        const {id}=req.params
        const watchlist=await Watchlist.findByIdAndDelete(id)
        !watchlist?
        res.status(200).json({alert:`Watchlist with ID: ${id} not found.`}):
        res.status(200).json({alert:`Watchlist with ID: ${id} deleted.`})
    }catch(error){throw error}
}
const getEquityNews=async (req,res)=>{
    try{
        const {query}=req.body
        let news=await googleNewsAPI.getNews(googleNewsAPI.SEARCH,query, "en-GB")
        res.status(200).json(news)
    }catch(eror){throw error}
}

module.exports={
    allWatchlists,
    createWatchlist,
    readWatchlist,
    updateWatchlist,
    deleteWatchlist,

    getEquityNews
}