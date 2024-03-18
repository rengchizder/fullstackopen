import { useEffect } from 'react'
import axios from 'axios'

const countriesService = (setCountries) => {
    useEffect(() => {
        axios
          .get('https://studies.cs.helsinki.fi/restcountries/api/all')
          .then(response => setCountries(response.data))
      }, [])    
}

export default countriesService

