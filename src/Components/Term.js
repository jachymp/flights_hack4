import 'bootstrap/dist/css/bootstrap.min.css';

function Term({setDepartureTime, setArrivalTime})
{
    return(
        <div className='    mt-3  '>
            <label className='m-lg-2'>Departure:</label>
            <input className="  mt-3 departure" type="date" />
            <label className='m-lg-2'>Arrival:</label>
            <input  className="arrival" type="date" />
            <button className="m-lg-2 btn btn-success" onClick={() =>
                    (setDepartureTime(document.querySelector('.departure').value),
                    setArrivalTime(document.querySelector('.arrival').value))}>
                    Search your flights
            </button>
        </div>
    )
}

export default Term;