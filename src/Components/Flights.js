import 'bootstrap/dist/css/bootstrap.min.css';
import { DateTime } from 'luxon';

function Flights({flights}) {

 flights.sort((a, b) => a.dTime - b.dTime);

  return (
    <div>
            <table className='table  thead-dark'>
                <tbody>

                    <tr className='table-dark' >
                        <th scope="col">From</th>
                        <th>To</th>
                        <th>Departure time</th>
                        <th>Arrival time</th>
                        <th>Price</th>
                        <th>Stopover</th>
                        <th>Be green!</th>
                    </tr>
                    {flights.map((flight, index) => (
                        <tr  key={index}>
                                    <td >{flight.cityFrom}</td>
                                    <td>{flight.cityTo}</td>
                                    <td>
                                        {DateTime.fromMillis(flight.dTime * 1000).toFormat(
                                            "LLL dd yyyy hh:mm"
                                        )}
                                    </td>
                                    <td>
                                        {DateTime.fromMillis(flight.aTime * 1000).toFormat(
                                            "LLL dd yyyy hh:mm"
                                        )}
                                    </td>
                                    <td>{flight.price} EUR</td>
                                    <td>{flight.routes.length == 1 ? 'Direct' : flight.routes.length - 1}</td>
                            <button className='btn btn-success'><a className='btn btn-success' href='https://www.greentripper.org/' target='_blank'>See detail</a></button>
                                </tr>
                    ))}

                </tbody>
            </table>
        
        {/* {console.log(flights)} */}
    </div>
  ) 
}
export default Flights;