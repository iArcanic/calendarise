// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  // Mock data for user calendars
  const userCalendars = [
    { id: '1', name: 'Family Events', description: 'Family gatherings and events' },
    { id: '2', name: 'Work Schedule', description: 'Work-related events and meetings' },
    // Add more mock calendars as needed
  ];

  return (
    <div>
      <h1>User Calendars</h1>
      {userCalendars.map((calendar) => (
        <div key={calendar.id}>
          <h3>{calendar.name}</h3>
          <p>{calendar.description}</p>
          <Link to={`/calendars/${calendar.id}`}>View Calendar</Link>
        </div>
      ))}
	  <Link to="/new-calendar">Create New Calendar</Link> {/* Add the button */}
    </div>
  );
};

export default MainPage;
