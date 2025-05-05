import React, { useState } from 'react'
import Search from './components/Weather app/Search'
import InfoBox from './components/Weather app/InfoBox'
import './WeatherApp.css'

function WeatherApp() {
    let [weatherdata,setWeatherData]=useState({
        city:"Delhi",
        temp:30,
        humdity:50,
        temp_max:35,
        temp_min:27,
        weather:"haze",
        feels_like:32
    });

    let upadateInfo=(newInfo)=>{
        setWeatherData(newInfo)
    }

  return (
    <div className="weather-container">
      <h1 className="app-heading">Weather Forecast</h1>
      <Search updateInfo={upadateInfo}/>
      <InfoBox info={weatherdata}/>
    </div>
  )
}

export default WeatherApp
