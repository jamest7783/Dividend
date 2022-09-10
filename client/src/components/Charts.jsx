import axios from 'axios'
import {useState,useEffect, useDebugValue} from 'react'
import {Line} from 'react-chartjs-2'
const Chart=require('chart.js/auto')
 
const Charts=()=>{

    const [mainChartData,setMainChartData]=useState({labels:[],datasets:[{label:'',data:[]}]})
    const [scrollChartData,setScrollChartData]=useState(Array(10).fill({labels:[],datasets:[{label:'',data:[]}]}))
    useEffect(()=>{
        const getMainChartData=async ()=>{
            let data=mainChartData
            const res=await axios.post('http://localhost:3002/api/equity/historical',{ticker:'TSLA',period:'d'})
            data.datasets[0].label='TSLA'
            res.data.reverse().map((period)=>{
                data.labels.push(period.date.substring(0,10))
                data.datasets[0].data.push(period.close) 
            })
            setMainChartData(data)
        }
        const getScrollChartData=async ()=>{
            let data=scrollChartData
            const res=await axios.post(
            'http://localhost:3002/api/equity/historical/batch',{
                tickers:['AAPL','F','AMC','GE','OCGN'],
                period:'d'
            })
            Object.keys(res.data).map((tkr,index)=>{
                data[index].datasets[0].label=tkr
                res.data[tkr].reverse().map((period)=>{
                    data[index].labels.push(period.date.substring(0,10))
                    data[index].datasets[0].data.push(period.close)
                })
           })
           console.log('historical data --> ',data)
      
        }
        getMainChartData()
        getScrollChartData()
    },[])
    return(
        <div id='glass'>
            <div id='chart'>
                <Line id='main-chart'
                data={mainChartData}/>
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