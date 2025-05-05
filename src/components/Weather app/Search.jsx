import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Search.css';
import { useState } from 'react';


function Search({updateInfo}) {
  let API_URL="https://api.openweathermap.org/data/2.5/weather";
  let API_KEY="4c4ba9d26fe0567d518cf0f37118f326";
    let [city,setCity]=useState("");

    let getWeather=async()=>{
      let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonRes=await res.json();
      console.log(jsonRes);
      let result={
        city:city,
        humdity:jsonRes.main.humdity,
        temp:jsonRes.main.temp,
        feels_like:jsonRes.main.feels_like,
        temp_max:jsonRes.main.temp_max,
        temp_min:jsonRes.main.temp_min,
        weather:jsonRes.weather[0].description
      }
      console.log(result);
      return result;
    }

    let handlecity=(e)=>{
        setCity(e.target.value);
    }
    let handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(city);
        setCity("");
        let abc=await getWeather();
        updateInfo(abc);
    }
  return (
    <div className='searchBox'>
      <h4>Search the city for weather report</h4>
      <br/>
      <form onSubmit={handleSubmit}>
      <TextField id="City" label="City" variant="outlined" required value={city} onChange={handlecity}/>
      <br/><br/>
      <Button variant="contained" type='submit' >Search</Button>
      </form>
      
    </div>
  )
}

export default Search
