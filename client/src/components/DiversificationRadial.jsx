import {Pie} from 'react-chartjs-2'
import {useState,useEffect} from 'react'
import axios from 'axios'
const Chart=require('chart.js/auto')

const DiversificationRadial=({investor})=>{

    const [positions,setPositions]=useState([])
    const [pieData,setPieData]=useState({labels:[],datasets:[{label:'positions',data:[]}]})

    useEffect(()=>{
        const getPositions=async ()=>{
            const res=await axios.get(`http://localhost:3002/api/portfolio/read/${investor.portfolios[0]}/positions`)
            setPositions(res.data)
            let temp={
                labels:[],
                datasets:[{label:'positions',data:[]}]
            }
            Object.keys(positions).map((pos)=>{
                temp.labels.push(pos)
                temp.datasets[0].data.push(positions[pos].numShares*positions[pos].avgPricePerShare)
            })
            setPieData({...temp} )
        }
        getPositions()
    },[])

    return(
        <div id='diversification-radial'>
            <Pie data={pieData }/> 
        </div>
    )
}
export default DiversificationRadial