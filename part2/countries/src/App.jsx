import { useState } from 'react'
import Countries from './components/Countries'
import countriesService from './services/countries'

const App = () => {
  const [newSearch, setNewSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])  

  const api_key = import.meta.env.VITE_WEATHER_KEY
  const handleChange = (event) => {
    setNewSearch(event.target.value)
    setFilteredCountries(countries.filter(country => (country['name']['common'].toLowerCase().includes(event.target.value.toLowerCase()) || country['name']['official'].toLowerCase().includes(event.target.value.toLowerCase()))))
  }
  
  const handleClickOf = (country) => {
    setFilteredCountries([country])
  }

  countriesService(setCountries)

  return (
    <>
      Find countries <input value={newSearch} onChange={handleChange}/><br />
      <Countries countries={filteredCountries} handleClickOf={handleClickOf} api_key={api_key}/>
    </>
  )
}

export default App
