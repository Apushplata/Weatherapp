import React from 'react'
import './WeatherApp.css'

const WeatherApp = () => {
  let api_key = "10176a65127154a096968ca23fd6f46e";

  const search = async() =>{
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value===""){
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-per");
    const wind = document.getElementsByClassName("wind-speed");
    const temprature = document.getElementsByClassName("temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + "Km/h";
    temprature[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;

  }
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search here'/>
        <div className="search-icon" onClick={()=>{search()}}>
            <img className="icon" src="https://cdn.pixabay.com/photo/2016/10/08/18/35/magnifier-1724298_1280.png" alt=""/>
        </div>
      </div>
      <div className="weather-img">
        <img className='weather-img' src="https://cdn.pixabay.com/photo/2013/04/01/09/22/warm-98534_640.png" alt=""/>
      </div>
      <div className="temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
          <img src="https://cdn.pixabay.com/photo/2016/07/19/08/52/hand-1527793_1280.png" alt="" className='wIcon'/>
          <div className="data">
            <div className="humidity-per">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src="https://cdn.pixabay.com/photo/2013/07/13/10/23/weather-157129_1280.png" alt="" className='wIcon'/>
          <div className="data">
            <div className="wind-speed">18 Km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
