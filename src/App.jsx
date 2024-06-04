// src/App.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonHome from './components/PersonHome';


const App = () => {
  const [persons, setPersons] = useState([]);

  // Fetch the persons data
  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = () => {
    axios.get('http://localhost:5000/persons')
      .then(response => setPersons(response.data))
      .catch(error => console.error('Error fetching persons', error));
  };

  const addPerson = (person) => {
    axios.post('http://localhost:5000/persons', person)
      .then(response => {
        setPersons([...persons, response.data]);
      })
      .catch(error => console.error('Error adding person', error));
  };

  return (
    <div className="container mx-auto p-4">
      <PersonHome persons={persons} addPerson={addPerson} />
    </div>
  );
};

export default App;
