const EquityChart=({investor})=>{

    
    const greeting=`Welcome ${investor.user_name},`

    return(
        <div id='equity-chart'>
            <div id='greeting'>{greeting}</div>

        </div>
    )
}
export default EquityChart