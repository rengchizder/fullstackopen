import Country from './Country'

const Countries = ({ countries, handleClickOf, api_key}) => {
    if (countries.length === 0) {
      return <></>
    }
    if (countries.length > 10) {
      return <>Too many matches, specify another filter</>
    } else if (countries.length > 1) {
      return (
        <div>
          {countries.map(country => <div key={country.name.common}>{country.name.common}<button onClick={() => handleClickOf(country)}>show</button><br /></div>)}
        </div>
      )
    } else {
      return <>{countries.map(country => <Country country={country} key={country.name.official} api_key={api_key}/>)}</>
    }
  }

export default Countries