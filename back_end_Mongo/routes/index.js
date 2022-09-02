const {Router}=require('express')
const router=Router()
const {fund,insight,investor,reaction,thread,watchlist}=require('../controllers')


router.get('/insight/all',insight.allInsights)
router.post('/insight/create',insight.createInsight)
router.get('/insight/read/:id',insight.readInsight)
router.put('/insight/update/:id',insight.updateInsight)
router.delete('/insight/delete/:id',insight.deleteInsight)

router.get('/reaction/all',reaction.allReactions)
router.post('/reaction/create',reaction.createReaction)
router.get('/reaction/read/:id',reaction.readReaction)
router.put('/reaction/update/:id',reaction.updateReaction)
router.delete('/reaction/delete/:id',reaction.deleteReaction)


router.get('/thread/all',thread.allThreads)
router.post('/thread/create',thread.createThread)
router.get('/thread/read/:id',thread.readThread)
router.put('/thread/update/:id',thread.updateThread)
router.delete('/thread/delete/:id',thread.deleteThread)


router.get('/watchlist/all',watchlist.allWatchlists)
router.post('/watchlist/create',watchlist.createWatchlist)
router.get('/watchlist/read/:id',watchlist.readWatchlist)
router.put('/watchlist/update/:id',watchlist.updateWatchlist)
router.delete('/watchlist/delete/:id',watchlist.deleteWatchlist)












module.exports=router