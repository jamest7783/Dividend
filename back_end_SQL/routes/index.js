const {Router}=require('express')
const router=Router()
const {portfolio}=require('../controllers')


router.post('/portfolio/create',portfolio.createPortfolio)
router.get('/portfolio/read/:pk',portfolio.readPortfolio)
router.put('/portfolio/update/:pk',portfolio.updatePortfolio)
router.delete('/portfolio/delete/:pk',portfolio.deletePortfolio)


module.exports=router