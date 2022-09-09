const Nav=({setFocus})=>{

    return(
        <div id='nav'>
                <button className="link" onClick={(e)=>{setFocus('news')}}>news</button>
                <button className="link" onClick={(e)=>{setFocus('charts')}}>charts</button>
                <button className="link" onClick={(e)=>{setFocus('community')}}>community</button>
                <button className="link" onClick={(e)=>{setFocus('portfolio')}}>portfolio</button>
                <button className="link" onClick={(e)=>{setFocus('dashboard')}}>dashboard</button>
                <button className="link" onClick={(e)=>{setFocus('login')}}>sign in</button>
        </div>
    )
}
export default Nav