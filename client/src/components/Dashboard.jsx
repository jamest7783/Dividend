import {useState,useEffect} from 'react'
import axios from 'axios'
import Watchlist from './Watchlist'
import EquityChart from './EquityChart'
import DiversificationRadial from './DiversificationRadial'
import Positions from './Positions'

const Dashboard=({investor})=>{

    return(
        <div id='glass'>
            <Watchlist investor={investor}/>
            <EquityChart investor={investor}/>
            <DiversificationRadial/>
            <Positions investor={investor}/>
        </div>
    )
}
export default Dashboard