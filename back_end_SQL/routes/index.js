const {Router}=require('express')
const router=Router()
// const {stripToken,verifyToken}=require('../middleware')
const {portfolio,position,symbol,trade}=require('../controllers')


router.post('/portfolio/create',portfolio.createPortfolio)

module.exports=router