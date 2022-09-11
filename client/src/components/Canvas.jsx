import {useState} from 'react'
import Account from './Account'
import Charts from './Charts'
import Community from './Community'
import Dashboard from './Dashboard'
import Login from '../components/Login'
import News from './News'
import Portfolio from './Portfolio'
import Register from '../components/Register'
 
const Canvas=({focus,setFocus,setInvestor,toggleAuthenticated,investor})=>{

    return(
        <div id='canvas'>
            {focus==='account'&&<Account/>}
            {focus==='charts'&&<Charts
                investor={investor}
            />}
            {focus==='community'&&<Community
                investor={investor}
            />}
            {focus==='dashboard'&&<Dashboard
                investor={investor}
            />}
            {focus==='login'&&<Login 
                setFocus={setFocus}
                setInvestor={setInvestor}
                toggleAuthenticated={toggleAuthenticated}
            />}
            {focus==='news'&&<News/>}
            {focus==='portfolio'&&<Portfolio/>}
            {focus==='register'&&<Register setFocus={setFocus}/>} 
        </div>
    )
}
export default Canvas