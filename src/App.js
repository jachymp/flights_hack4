import "./App.css";
import Flights from "./Components/Flights";
import SearchBar from "./Components/SearchBar";
import { useEffect, useState } from "react";
import Term from "./Components/Term";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {

  // set all flights
  const [flights, setFlights] = useState(null);

  // set city from and to
  const [cityFrom, setCityFrom] = useState("");
  const [cityTo, setCityTo] = useState("");

  // set time
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTIme, setArrivalTime] = useState("");

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

  const flightUrl = `https://api.skypicker.com/flights?fly_from=${cityFrom}&fly_to=${cityTo}&partner=${affilId}&limit=20`;
  
  async function fetchData() {
    console.log(flightUrl);
    const resp = await fetch(flightUrl);
    const res = await resp.json();
    console.log(cityTo);
    console.log(cityFrom);
    setFlights(res.data);
  }

  useEffect(() => {
    cityFrom && cityTo &&
    fetchData();
  }, [cityFrom, cityTo]);
    
  return (
      <div >
        <h1 className='text-center mt-3'> Happy Flight</h1>
        <div className=" d-flex flex-row m-4 justify-content-center mx-3 ">

         <div className='mx-3 '> <SearchBar    setValue={setCityFrom} type={departure} name={'From: '}/></div>
          <SearchBar setValue={setCityTo} type={destination} name={'To: '}/>

          <Term />
        </div>
       <div className='d-flex justify-content-center'> { flights && <Flights flights={flights} cityTo={cityTo}/>}</div>

      </div>

  );
}
export default App;
