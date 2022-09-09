import axios from 'axios'
import {useEffect,useState} from 'react'

const EquityChart=({investor})=>{

    const [portfolio,setPortfolio]=useState({})
    useEffect(()=>{
        // const portfolio=await axios.get('htt')
    },[])

    const greeting=`Welcome ${investor.user_name},`


    return(
        <div id='equity-chart'>
            <div id='greeting'>{greeting}</div>

        </div>
    )
}
export default EquityChart