import { DateTime } from 'luxon';

function Flights({flights}) {

 

  return (
    <div>
            <table>
                <tbody>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Departure time</th>
                        <th>Arrival time</th>
                        <th>Price</th>
                        <th>Stopover</th>
                    </tr>
                    {flights.map((flight, index) => (
                        <tr key={index}>
                                    <td>{flight.cityFrom}</td>
                                    <td>{flight.cityTo}</td>
                                    <td>
                                        {DateTime.fromMillis(flight.dTime * 1000).toFormat(
                                            "yyyy LLL dd hh:mm"
                                        )}
                                    </td>
                                    <td>
                                        {DateTime.fromMillis(flight.aTime * 1000).toFormat(
                                            "yyyy LLL dd hh:mm"
                                        )}
                                    </td>
                                    <td>{flight.price} EUR</td>
                                    {/* <td>{flight.routes.length == 1 ? 'Direct' : flight.routes.length - 1}</td> */}
                                </tr>
                    ))}

                </tbody>
            </table>
        
        {console.log(flights)}
    </div>
  ) 
}
export default Flights;