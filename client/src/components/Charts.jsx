import {Line} from 'react-chartjs-2'
const Chart=require('chart.js/auto')
 


const Charts=()=>{

    return(
        <div id='glass'>
            <div id='chart'>
                <Line
                data={{
                    labels: ['Jun', 'Jul', 'Aug'],
                    datasets: [
                      {
                        id: 1,
                        label: '',
                        data: [5, 6, 7],
                      },
                      {
                        id: 2,
                        label: '',
                        data: [3, 2, 1],
                      },
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