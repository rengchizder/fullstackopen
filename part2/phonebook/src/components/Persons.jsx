import Person from './Person'

const Persons = ({newSearch, persons, handleDeletePerson}) => {
    const filteredArray = persons.filter(person => person.name.substring(0, newSearch.length).toLowerCase() === newSearch.toLowerCase())

    return (
        <>
        {filteredArray.map( (person) => <Person name={person.name} number={person.number} handleDelete={() => handleDeletePerson(person.name)} key={person.name}/>)}
        </>
    )
}

export default Persons