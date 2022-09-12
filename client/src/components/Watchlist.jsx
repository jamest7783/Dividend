import {useEffect,useState} from 'react'
import axios from 'axios'

const Watchlist=({investor})=>{

    const [watchlistItems,setWatchlistItems]=useState([])
    useEffect(()=>{
        const fillWatchlist=async ()=>{
            const res=await axios.get(`http://localhost:3001/api/watchlist/read/${investor.watchlists[0]}`)
            let tempArray=Array()
            for(let symbol in res.data.symbols){
                const watchlistData=await axios.post(
                    'http://localhost:3002/api/equity/historical',{ticker:res.data.symbols[symbol],period:'d'})
                let sym=watchlistData.data[0].symbol
                let close=watchlistData.data[0].close
                tempArray.push({[`${sym}`]:close.toFixed(2)})
            } 
            setWatchlistItems(tempArray)
        } 
        fillWatchlist()
    },[])

    return(
        <div id='watchlist'>
            {watchlistItems.map((item)=>(
                <div className='watchlist-item'>
                    <div>{Object.keys(item)}</div> 
                    <div>{Object.values(item)}</div> 
                </div>
                 
            ))}
  
        </div>
    )
}
export default Watchlist