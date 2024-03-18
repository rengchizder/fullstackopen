
import countryService from '../services/country'
import { useState } from 'react'

const Country = ({country, api_key}) => {
    const [weather, setWeather] = useState({'tmp': '-', 'wind': '-', 'icon_url': 'https://www.w3schools.com/images/w3schools_green.jpg'})
    const lat = country.capitalInfo.latlng[0]
    const lon = country.capitalInfo.latlng[1]
  
    const languages = country['languages']
    const flagStyle = {
      width: 160,
      minHeight: 160, 
      maxHeight: "auto"
    }
  
    countryService(lat, lon, api_key, setWeather)
  
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>
          capital {country.capital} <br />
          area {country.area} <br />
        </p>
        <h2>languages: </h2>
        <ul>
          {Object.values(languages).map(value => <li key={value}>{value}</li>)}
        </ul>
        <img style={flagStyle} src={country.flags.png}/>
        <h2>Weather in {country.capital}</h2>
        <p>temperature {weather.tmp} Celcius</p>
        <img src={weather.icon_url}/>
        <p>wind {weather.wind} m/s</p>
      </div>
    )
}

export default Country

