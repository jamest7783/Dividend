import Account from './Account'
import Charts from './Charts'
import Community from './Community'
import Dashboard from './Dashboard'
import Login from '../components/Login'
import News from './News'
import Portfolio from './Portfolio'
import Register from '../components/Register'
 
const Canvas=({focus,setFocus})=>{

    return(
        <div id='canvas'>
            {focus==='account'&&<Account/>}
            {focus==='charts'&&<Charts/>}
            {focus==='community'&&<Community/>}
            {focus==='dashboard'&&<Dashboard/>}
            {focus==='login'&&<Login setFocus={setFocus}/>}
            {focus==='news'&&<News/>}
            {focus==='portfolio'&&<Portfolio/>}
            {focus==='register'&&<Register setFocus={setFocus}/>} 
        </div>
    )
}
export default Canvas