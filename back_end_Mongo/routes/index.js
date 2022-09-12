const {Router}=require('express')
const {stripToken,verifyToken}=require('../middleware')
const router=Router()
const {fund,insight,investor,reaction,thread,watchlist}=require('../controllers')

router.get('/fund/all',fund.allFunds)
router.post('/fund/create',stripToken,verifyToken,fund.createFund)
router.get('/fund/read/:id',fund.readFund)
router.put('/fund/update/:id',stripToken,verifyToken,fund.updateFund)
router.delete('/fund/delete/:id',stripToken,verifyToken,fund.deleteFund)

router.get('/insight/all',insight.allInsights)
router.post('/insight/create',insight.createInsight)
router.get('/insight/read/:id',insight.readInsight)
router.put('/insight/update/:id',stripToken,verifyToken,insight.updateInsight)
router.delete('/insight/delete/:id',stripToken,verifyToken,insight.deleteInsight)

router.post('/investor/register',investor.register)
router.post('/investor/login',investor.login)
router.put('/investor/update-password',stripToken,verifyToken,investor.updatePassword)
router.get('/investor/check-session',stripToken,verifyToken,investor.checkSession)

router.get('/investor/all',investor.allInvestors)
router.get('/investor/read/:id',investor.readInvestor)
router.put('/investor/update/:id',stripToken,verifyToken,investor.updateInvestor)
router.delete('/investor/delete/:id',stripToken,verifyToken,investor.deleteInvestor)

router.get('/reaction/all',reaction.allReactions)
router.post('/reaction/create',stripToken,verifyToken,reaction.createReaction)
router.get('/reaction/read/:id',reaction.readReaction)
router.put('/reaction/update/:id',stripToken,verifyToken,reaction.updateReaction)
router.delete('/reaction/delete/:id',stripToken,verifyToken,reaction.deleteReaction)

router.get('/thread/all',thread.allThreads)
router.post('/thread/create',thread.createThread)
router.get('/thread/read/:id',thread.readThread)
router.put('/thread/update/:id',stripToken,verifyToken,thread.updateThread)
router.delete('/thread/delete/:id',stripToken,verifyToken,thread.deleteThread)

router.get('/watchlist/all',watchlist.allWatchlists)
router.post('/watchlist/create',stripToken,verifyToken,watchlist.createWatchlist)
router.get('/watchlist/read/:id',watchlist.readWatchlist)
router.put('/watchlist/update/:id',stripToken,verifyToken,watchlist.updateWatchlist)
router.delete('/watchlist/delete/:id',stripToken,verifyToken,watchlist.deleteWatchlist)
router.post('/watchlist/news',watchlist.getEquityNews)












module.exports=router