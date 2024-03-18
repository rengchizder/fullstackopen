import { useState, useEffect } from 'react'
import axios from 'axios'

const countryService = (lat, lon, api_key, setWeather) => {
    useEffect(() => {
        axios
          .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
          .then(response => {
             const tmp = response.data.main.temp
             const wind = response.data.wind.speed
             const icon = response.data.weather[0].icon
             const icon_url = `https://openweathermap.org/img/wn/${icon}@2x.png`
             const weather = {
              tmp: tmp, 
              wind: wind,
              icon_url: icon_url
             }
             setWeather(weather)
          })
          .catch(error => {
            console.log('weather failed')
        })
      }, [])
}

export default countryService