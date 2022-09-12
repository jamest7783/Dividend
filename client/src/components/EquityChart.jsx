import axios from 'axios'
import {useEffect,useState} from 'react'

const EquityChart=({investor})=>{

    const greeting=`Welcome ${investor.user_name},`
    const [equity,setEquity]=useState(0)
    useEffect(()=>{
        const grabPortfolio=async ()=>{
            let capital=0
            for(let i=0;i<investor.portfolios.length;i++){
                const res=await axios.get(`http://localhost:3002/api/portfolio/read/${investor.portfolios[i]}`)
                capital+=res.data.capital
            }
            setEquity(capital.toFixed(2))
        }
        grabPortfolio()
    },[])

    return(
        <div id='equity-chart'>
            <div id='greeting'>{greeting}</div>
            <div id='equity'>Capital ${equity}</div>

        </div>
    )
}
export default EquityChart