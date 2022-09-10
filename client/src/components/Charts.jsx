import axios from 'axios'
import {useState,useEffect, useDebugValue} from 'react'
import {Line} from 'react-chartjs-2'
const Chart=require('chart.js/auto')
 
const Charts=({investor})=>{

    const [temp,setTemp]=useState('')
    const [mainSymbol,setMainSymbol]=useState('TSLA')
    const [order,setOrder]=useState({date:'',numShares:0,pricePerShare:0,portfolioId:0,ticker:''})
    const handleChange=(e)=>{setOrder({...order,[e.target.name]:e.target.value})}
    const handleSymbol=(e)=>{
        e.preventDefault()
        setTemp(e.target.value)
    }
    const handleSubmitSymbol=(e)=>{
        e.preventDefault()
        setMainSymbol(temp)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const res=await axios.post('http://localhost:3002/api/order/create',order)
    }
    const [mainChartData,setMainChartData]=useState({labels:[],datasets:[{label:'',data:[]}]})
    const [scrollChartData,setScrollChartData]=useState([])
    useEffect(()=>{
        let tkr=mainSymbol
        const getMainChartData=async ()=>{
            let data={labels:[],datasets:[{label:'',data:[]}]}
            const res=await axios.post('http://localhost:3002/api/equity/historical',{ticker:mainSymbol,period:'d'})
            data.datasets[0].label=tkr 
            res.data.reverse().map((period)=>{
                data.labels.push(period.date.substring(0,10))
                data.datasets[0].data.push(period.close) 
            })
            setMainChartData(data)
            setOrder({...order,
                date:data.labels[data.labels.length-1],
                numShares:0,
                pricePerShare:data.datasets[0].data[data.datasets[0].data.length-1],
                portfolioId:investor.portfolios[0],
                ticker:tkr
            })
        }
        const getScrollChartData=async ()=>{
            let scrollData=[{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]},{labels:[],datasets:[{label:'',data:[]}]}]
            let tickers=['AAPL','F','AMC','GE','OCGN']
            const res=await axios.post(
            'http://localhost:3002/api/equity/historical/batch',{
                tickers,
                period:'m'
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
    },[mainSymbol])
    return(
        <div id='glass'>
            <div id='chart'>
                    <input onChange={handleSymbol} id='main-chart-sym' placeholder='symbol'/>  
                    <button onClick={(e)=>{handleSubmitSymbol(e)}}>view</button>
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
            </div>
            <div id='trade-bar-container'>
                    <div>
                        per Share: {mainChartData.datasets[0].data[mainChartData.datasets[0].data.length-1]}
                    </div>
                    <div>
                        cost basis:{mainChartData.datasets[0].data[mainChartData.datasets[0].data.length-1]
                        *order.numShares}
                    </div>
                    <input 
                        id='order-numShares'
                        onChange={handleChange}
                        name='numShares'
                        type='numShares'
                        placeholder='quantity'
                        value={order.numShares}
                    />   
                    <button onClick={(e)=>{handleSubmit(e)}}>
                        Submit Order
                    </button>
                 
               
            </div>
        </div>
    )
}
export default Charts