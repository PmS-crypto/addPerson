// src/components/PersonList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('/api/persons')
      .then(response => setPersons(response.data))
      .catch(error => console.error('Error fetching persons', error));
  }, []);

  return (
    <div>
      <h1>Person List</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>State</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.state}</td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
