// src/components/PersonList.jsx
import React from 'react';

const PersonList = ({ persons }) => {
  return (
    <div className='bg-white p-6 rounded-lg flex flex-col'>
      <h2 className="text-2xl font-semibold mb-4">Person List</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2 border-b">First Name</th>
            <th className="p-2 border-b">Last Name</th>
            <th className="p-2 border-b">Email</th>
            <th className="p-2 border-b">Phone</th>
            <th className="p-2 border-b">State</th>
            <th className="p-2 border-b">City</th>
          </tr>
        </thead>
        <tbody>
          {persons.map(person => (
            <tr key={person.id} className="odd:bg-white even:bg-gray-100">
              <td className="p-2 border-b">{person.firstName}</td>
              <td className="p-2 border-b">{person.lastName}</td>
              <td className="p-2 border-b">{person.email}</td>
              <td className="p-2 border-b">{person.phone}</td>
              <td className="p-2 border-b">{person.state}</td>
              <td className="p-2 border-b">{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
