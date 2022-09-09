import Watchlist from './Watchlist'
import EquityChart from './EquityChart'
import DiversificationRadial from './DiversificationRadial'
import Positions from './Positions'



const Dashboard=()=>{

    return(
        <div id='glass'>
            <Watchlist/>
            <EquityChart/>
            <DiversificationRadial/>
            <Positions/>
        </div>
    )
}
export default Dashboard