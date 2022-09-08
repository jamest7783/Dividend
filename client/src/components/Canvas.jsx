import Login from '../components/Login'
import Register from '../components/Register'

const Canvas=({focus,setFocus})=>{

    return(
        <div id='canvas'>
            {focus==='login' && <Login setFocus={setFocus}/>}
            {focus==='register' && <Register />} 
         
        </div>
    )
}
export default Canvas