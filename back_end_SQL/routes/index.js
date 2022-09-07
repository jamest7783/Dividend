const {Router}=require('express')
const router=Router()
const {equity,order,portfolio,quote}=require('../controllers')

router.post('/portfolio/create',portfolio.createPortfolio)
router.get('/portfolio/read/:pk',portfolio.readPortfolio)
router.put('/portfolio/update/:pk',portfolio.updatePortfolio)
router.delete('/portfolio/delete/:pk',portfolio.deletePortfolio)
router.get('/portfolio/read/:pk/positions',portfolio.readPortfolioPositions)

router.post('/order/create',order.createOrder)

router.post('/equity/historical',equity.getHistorical)

module.exports=router