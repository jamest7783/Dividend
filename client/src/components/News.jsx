import {useEffect,useState} from 'react'
import axios from 'axios'

const News=()=>{

    const [query,setQuery]=useState('')
    const [news,setNews]=useState([])
    const handleChange=(e)=>{setQuery({query:e.target.value})}
    const requestNews=async ( )=>{
        const res=await axios.post('http://localhost:3001/api/watchlist/news',query)
        setNews(res.data.items)
    }


    return(
        <div id='glass'>
            <div id='news-search-container'>
                <button id='news-search-button'
                    onClick={(e)=>{requestNews()}}>
                    search
                </button>
                <input id='news-search-input'          
                    onChange={handleChange}
                    name='search'
                    type='search'
                    placeholder='search'
                ></input>
            </div>
            <div id='news'>
                {news?.map((article)=>(
                    <div id='tile'>
                        <div>{article.title}</div>
                        <div>{article.link}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default News