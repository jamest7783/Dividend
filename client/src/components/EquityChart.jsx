const EquityChart=({investor})=>{

    const greeting=`Welcome ${investor.email},`

    return(
        <div id='equity-chart'>
            <div id='greeting'>{greeting}</div>

        </div>
    )
}
export default EquityChart