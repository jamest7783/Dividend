const {Router}=require('express')
const router=Router()
// const {stripToken,verifyToken}=require('../middleware')
const {portfolio,position,symbol,trade}=require('../controllers')


router.post('/portfolio/create',portfolio.createPortfolio)
router.get('/portfolio/read/:pk',portfolio.readPortfolio)
router.put('/portfolio/update/:pk',portfolio.updatePortfolio)
router.delete('/portfolio/delete/:pk',portfolio.deletePortfolio)
router.post('/portfolio/:pk/trade',portfolio.createTrade)

module.exports=router