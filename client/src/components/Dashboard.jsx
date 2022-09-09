import Watchlist from './Watchlist'
import EquityChart from './EquityChart'
import DiversificationRadial from './DiversificationRadial'
import Positions from './Positions'



const Dashboard=({investor})=>{

    return(
        <div id='glass'>
            <Watchlist/>
            <EquityChart investor={investor}/>
            <DiversificationRadial/>
            <Positions/>
        </div>
    )
}
export default Dashboard