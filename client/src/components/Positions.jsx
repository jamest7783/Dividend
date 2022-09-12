import axios from 'axios'
import {useEffect,useState} from 'react'


const Positions=({investor})=>{

    const [positions,setPositions]=useState([])

    useEffect(()=>{
        const getPositions=async ()=>{
            console.log(investor.portfolios[0])
            const res=await axios.get(`http://localhost:3002/api/portfolio/read/${investor.portfolios[0]}/positions`)
            setPositions(res.data)
        }
        getPositions()
    },[])


    return(
        <div id='positions'>
            {Object.keys(positions)?.map((pos)=>(
                <div id='position'>
                    <p>{pos.toUpperCase()}</p>
                    <p>Shares: {positions[pos].numShares}</p> 
                    <p>AvgPricePerShare: {positions[pos].avgPricePerShare.toFixed(2)}</p> 
                    <p>Last Close: {positions[pos].currentPrice.toFixed(2)}</p> 
                    <p>Capital Gains: {(positions[pos].numShares*(positions[pos].currentPrice-positions[pos].avgPricePerShare)).toFixed(2)}</p> 
                    
                </div>
            ))}
        </div>
    )
}
export default Positions