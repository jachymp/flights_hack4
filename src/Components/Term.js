function Term(props)
{
    return(
        <div>
            <label>Departure:</label>
            <input className="departure" type="date" />
            <label>Arrival:</label>
            <input className="arival" type="date" />
            {/* <button onClick={(e) => }>Search your flights</button> */}
        </div>
    )
}

export default Term;