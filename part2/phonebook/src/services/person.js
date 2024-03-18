import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(`${baseUrl}`)
    return request.then(response => response.data)
}

const add = (newPerson) => {
  const request =  axios.post(`${baseUrl}`, newPerson)
  return request.then(response => response.data)
}

const update = (ID, newPerson) => {
    const request =  axios.put(`${baseUrl}/${ID}`, newPerson)
    return request.then(response => response.data)
}

const deletePerson = (ID) => {
  const request = axios.delete(`http://localhost:3001/persons/${ID}`)
  return request.then(response => response.data)
}

export default { 
  getAll: getAll, 
  update: update, 
  deletePerson: deletePerson, 
  add: add
}
