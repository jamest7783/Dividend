const Nav=({setFocus,authenticated})=>{

    return(
        <div id='nav'>
                <button className="link" onClick={(e)=>{setFocus('news')}}>news</button>
                <button className="link" onClick={(e)=>{setFocus('charts')}}>charts</button>
                <button className="link" onClick={(e)=>{setFocus('community')}}>community</button>
                <button className="link" onClick={(e)=>{setFocus('portfolio')}}>portfolio</button>
                {authenticated &&
                    <button className="link" onClick={(e)=>{setFocus('dashboard')}}>dashboard</button>}
                {!authenticated && 
                    <button className="link" onClick={(e)=>{setFocus('login')}}>sign in</button>}
        </div>
    )
}
export default Nav