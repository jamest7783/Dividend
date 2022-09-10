import axios from 'axios'
import {useState,useEffect, useDebugValue} from 'react'
import {Line} from 'react-chartjs-2'
const Chart=require('chart.js/auto')
 
const Charts=()=>{

    const [mainChartData,setMainChartData]=useState({labels:[],datasets:[{label:'',data:[]}]})
    const [scrollChartData,setScrollChartData]=useState(Array(5).fill({labels:[],datasets:[{label:'',data:[]}]}))
    useEffect(()=>{
        const getMainChartData=async ()=>{
            let data={labels:[],datasets:[{label:'',data:[]}]}
            const res=await axios.post('http://localhost:3002/api/equity/historical',{ticker:'TSLA',period:'d'})
            data.datasets[0].label='TSLA'
            res.data.reverse().map((period)=>{
                data.labels.push(period.date.substring(0,10))
                data.datasets[0].data.push(period.close) 
            })
            setMainChartData(data)
        }
        const getScrollChartData=async ()=>{
            let scrollData=[{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]}]
            let tickers=['AAPL','F','AMC','GE','OCGN']
            const res=await axios.post(
            'http://localhost:3002/api/equity/historical/batch',{
                tickers,
                period:'w'
            })
            Object.keys(res.data).map((tkr,i)=>{
                scrollData[i].datasets[0].label=tkr
                res.data[tkr].map((period)=>{
                    scrollData[i].labels.push(period.date.substring(0,10))
                    scrollData[i].datasets[0].data.push(period.close)
                })
            })
            setScrollChartData(scrollData)
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
                {scrollChartData.map((unit)=>(
                    <div className='mini-chart'>
                        <Line data={unit}/>
                    </div>
                ))}
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
                <div className='mini-chart'></div>
            </div>
            <div id='trade-bar'>
                    <div>{mainChartData.datasets[0].label}</div>

                    <div></div>
            </div>
        </div>
    )
}
export default Charts