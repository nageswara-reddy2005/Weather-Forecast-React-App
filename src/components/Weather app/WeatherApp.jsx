import React, { useState } from 'react'
import Search from './Search'
import InfoBox from './InfoBox'

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
    <div>
      <Search updateInfo={upadateInfo}/>
      <InfoBox info={weatherdata}/>
    </div>
  )
}

export default WeatherApp
