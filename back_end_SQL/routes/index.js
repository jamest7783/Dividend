const {Router}=require('express')
const router=Router()
// const {stripToken,verifyToken}=require('../middleware')
const {portfolio,position,symbol,trade}=require('../controllers')



router.post('/portfolio/create',portfolio.createPortfolio)
// router.get('/portfolio/read/:id',portfolio.readPortfolio)
// router.put('/portfolio/update/:id',portfolio.updatePortfolio)
// router.delete('/portfolio/delete/:id',portfolio.deletePortfolio)


module.exports=router