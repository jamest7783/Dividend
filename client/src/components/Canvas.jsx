import Login from '../components/Login'

const Canvas=({focus})=>{

    return(
        <div id='canvas'>
            {focus==='login' && <Login />}
         
        </div>
    )
}
export default Canvas