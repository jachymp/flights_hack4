import 'bootstrap/dist/css/bootstrap.min.css'
function Term(props)
{
    return(
        <div className='  '>
            <label>Departure:</label>
            <input className="  mt-3 departure" type="date" />
            <label>Arrival:</label>
            <input className="arival" type="date" />
            {/* <button onClick={(e) => }>Search your flights</button> */}
        </div>
    )
}

export default Term;