const {Router}=require('express')
const router=Router()
const {fund,insight,investor,reaction,watchlist}=require('../controllers')




router.post('/watchlist/create',watchlist.createWatchlist)






module.exports=router