import Watchlist from './Watchlist'
import EquityChart from './EquityChart'
import DiversificationRadial from './DiversificationRadial'
import Positions from './Positions'



const Dashboard=()=>{

    return(
        <div id='dashboard'>
            <Watchlist/>
            <EquityChart/>
            <DiversificationRadial/>
            <Positions/>
        </div>
    )
}
export default Dashboard