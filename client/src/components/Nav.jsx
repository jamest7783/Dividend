const Nav=({setFocus})=>{

    return(
        <div id='nav'>
                <button className="link">news</button>
                <button className="link">charts</button>
                <button className="link">community</button>
                <button className="link" onClick={(e)=>{setFocus('login')}}>account</button>
        </div>
    )
}
export default Nav