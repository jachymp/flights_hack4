function Term({setDepartureTime, setArrivalTime})
{
    return(
        <div>
            <label>Departure:</label>
            <input className="departure" type="date" />
            <label>Arrival:</label>
            <input className="arrival" type="date" />
            <button onClick={() =>
                    (setDepartureTime(document.querySelector('.departure').value),
                    setArrivalTime(document.querySelector('.arrival').value))}>
                    Search your flights
            </button>
        </div>
    )
}

export default Term;