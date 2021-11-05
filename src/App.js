import "./App.css";
import { useEffect, useState } from "react";
import { DateTime } from 'luxon';
import Flights from "./Components/Flights";
import SearchBar from "./Components/SearchBar";
import Term from "./Components/Term";
import Pagination from "./Components/Pagination";


function App() {

  // set all flights
  const [flights, setFlights] = useState(null);

  // set city from and to
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");

  // set time
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");

  // pagination
  const [pagination, setPagination] = useState(5);

  const affilId = "data4youcbp202106";
  
  const destination = [
    {
      code: 'VLC', 
      name: "Valencia",
    },
    {
      code: 'BCN',
      name: 'Barcelona',
    },
    {
      code: 'MAD',
      name: 'Madrid',
    },
    {
      code: 'MIL',
      name: 'Milano',
    },
    {
      code: 'ATH',
      name: 'Athens',
    },
    {
      code: 'BOS',
      name: 'Boston'
    }

  ];

  const departure = [
    {
      code: 'PRG', 
      name: "Prague",
    },
    {
      code: 'BER', 
      name: "Berlin",
    },
    {
      code: 'WAW', 
      name: "Warsaw",
    },
    {
      code: 'PED', 
      name: "Pardubice",
    },
    {
      code: 'NYC',
      name: 'New York',
    }
  ];

  const departureConversion = DateTime.fromISO(departureTime).toFormat('d/M/yyyy');
  const arrivalDateConversion = DateTime.fromISO(arrivalTime).toFormat('d/M/yyyy');
  

  const flightUrl = `https://api.skypicker.com/flights?fly_from=${cityFrom}&fly_to=${cityTo}&date_from=${departureConversion}&date_to=${arrivalDateConversion}&partner=${affilId}&limit=${pagination}`;
  
  async function fetchData() {
    console.log(flightUrl);
    const resp = await fetch(flightUrl);
    const res = await resp.json();
    // console.log(cityTo);
    // console.log(cityFrom);
    setFlights(res.data);
  }

  useEffect(() => {
    cityFrom && cityTo && departureTime && arrivalTime &&
    fetchData();
  }, [cityFrom, cityTo, departureTime, arrivalTime, pagination]);
    
  return (
    <div>
      <SearchBar setValue={setCityFrom} type={departure} name={'From: '}/>
      <SearchBar setValue={setCityTo} type={destination} name={'To: '}/>
      <Term setDepartureTime={setDepartureTime} setArrivalTime={setArrivalTime}/>
      {flights && <Flights flights={flights} cityTo={cityTo}/>}
      <Pagination setPagination={setPagination} pagination={pagination} disabled={!pagination}/>
      {/* {console.log(departureConversion)}
      {console.log(arrivalDateConversion)} */}
      {console.log(pagination)}
    </div>
  );
}
export default App;
