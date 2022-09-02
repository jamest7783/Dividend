const {Router}=require('express')
const router=Router()
const {fund,insight,investor,reaction,watchlist}=require('../controllers')

module.exports=router