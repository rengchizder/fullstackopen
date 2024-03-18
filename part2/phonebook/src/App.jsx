import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [newNotification, setNewNotification] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }  
    if (persons.some(person => person.name === newName)) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const ID = persons.find(person => person.name === newName)['id']

        personService
          .update(ID, newPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name !== returnedPerson['name'] ? person : returnedPerson))
            setNewNotification(`Changed ${returnedPerson['name']} number`)
            setTimeout(() => setNewNotification(null), 5000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            setNewNotification(`Information of ${newPerson['name']} has already been removed from server`)
            setTimeout(() => setNewNotification(null), 5000)
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      personService
        .add(newPerson)
        .then(response => {
          setNewNotification(`Added ${response['name']}`)
          setTimeout(() => setNewNotification(null), 5000)
          setPersons(persons.concat(response))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNewSearch = (event) => {
    setNewSearch(event.target.value)
  }
  
  useEffect(() => {
    personService
      .getAll()
      .then(allPersons => setPersons(allPersons))
  }, [])

  const handleDeletePerson = (name) => {
    if (confirm(`Delete ${name} ?`)) {
      const ID = persons.find(person => person.name === name)['id']
      personService
        .deletePerson(ID)
        .then(deletedPerson => {
          setPersons(persons.filter(person => person.id !== deletedPerson['id']))})
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={newNotification}/>
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch}/>

      <h3>add a new</h3>

      <PersonForm 
        handleSubmit={handleSubmit} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons newSearch={newSearch} persons={persons} handleDeletePerson={handleDeletePerson}/>
    </div>
  )
}

export default App