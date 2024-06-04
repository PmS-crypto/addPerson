import React from 'react';
import PersonList from './PersonList';
import PersonAdd from './PersonAdd';
import './PersonHome.css'; // Import CSS file for animations

const PersonHome = ({ persons, addPerson }) => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 animate-title">Person Management App</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-4 animate-person-add">
          <PersonAdd addPerson={addPerson} />
        </div>
        <div className="w-full md:w-1/2 p-4 animate-person-list">
          <PersonList persons={persons} />
        </div>
      </div>
    </div>
  );
};

export default PersonHome;
