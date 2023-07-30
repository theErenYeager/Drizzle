import logo from './logo.svg';
import { WEATHER_API_KEY,WEATHER_API_URL } from './api';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { useState } from 'react';


function App() {

  const [currentWeather, setcurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat,lon]= searchData.value.split(" ");

    const CurrentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    CurrentWeatherFetch.then(async (res) => {

      const weatherRes = await res.json(); 

      setcurrentWeather({city: searchData.label , ...weatherRes})
    
    })
    .catch((err) => {
      console.log(err);

    })

  }
   console.log(currentWeather);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      { currentWeather && <CurrentWeather data={currentWeather} />}
      
    
    </div>
  );
}

export default App;
