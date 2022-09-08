const Nav=({setFocus})=>{

    const show=(focus)=>{setFocus(focus)}

    return(
        <div id='nav'>
                <button className="link">news</button>
                <button className="link">charts</button>
                <button className="link">community</button>
                <button className="link" onClick={(e)=>{show('login')}}>account</button>
        </div>
    )
}
export default Nav