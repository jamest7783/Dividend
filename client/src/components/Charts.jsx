import axios from 'axios'
import {useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'
const Chart=require('chart.js/auto')
 
const Charts=()=>{

    const [mainChartData,setMainChartData]=useState({})
    useEffect(()=>{
        const getMainChartData=async ()=>{
            const res=await axios.post('http://localhost:3002/api/equity/historical',{ticker:'TSLA',period:'d'})
            console.log(res.data )
        }
        getMainChartData()
    },[])






    return(
        <div id='glass'>
            <div id='chart'>
                <Line
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                      {
                        label: 'TSLA',
                        data: [5, 6, 7],
                      }
                    ],
                  }}/>




            </div>
            <div id='indicators'></div>
            <div id='charts'>
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
            </div>
        </div>
    )
}
export default Charts