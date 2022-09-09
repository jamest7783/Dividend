import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from './Dashboard'

const Canvas=({focus,setFocus})=>{

    return(
        <div id='canvas'>
            {focus==='login'&&<Login setFocus={setFocus}/>}
            {focus==='register'&&<Register setFocus={setFocus}/>} 
            {focus==='dashboard'&&<Dashboard setFocus={setFocus}/>}
        </div>
    )
}
export default Canvas