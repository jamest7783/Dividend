const mongoose=require('mongoose')

const fundSchema=require('./Fund')
const insightSchema=require('./Insight')
const investorSchema=require('./Investor')
const reactionSchema=require('./Reaction')
const watchlistSchema=require('./Watchlist')

const Fund=mongoose.model('Fund',fundSchema)
const Insight=mongoose.model('Insight',insightSchema)
const Investor=mongoose.model('Investor',investorSchema)
const Reaction=mongoose.model('Reaction',reactionSchema)
const Watchlist=mongoose.model('Watchlist',watchlistSchema)

module.exports={
    Fund,
    Insight,
    Investor,
    Reaction,
    Watchlist
}