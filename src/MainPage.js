// src/MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import FullCalendarComponent from './FullCalendar'

const MainPage = () => {
  // Mock data for user calendars
  const userCalendars = [
    { 
	    id: '1',
	    name: 'Family Events',
	    description: 'Family gatherings and events',
	    events: [
		{ title: 'Family Reuinion', date: '2023-08-10' },
		{ title: 'Birthday Party', date: '2023-08-15' }
	    ]
    },
    { 
	    id: '2',
	    name: 'Work Schedule',
	    description: 'Work-related events and meetings',
	    events: [
		{ title: 'Team Meeting', date: '2023-08-12' },
		{ title: 'Project Deadline', date: '2023-08-15' }
	    ]
    },
  ];

  return (
    <div>
      <h1>User Calendars</h1>
      <Link to="/new-calendar">Create New Calendar</Link>
      {userCalendars.map((calendar) => (
        <div key={calendar.id}>
          <h3>{calendar.name}</h3>
          <p>{calendar.description}</p>
          <Link to={`/calendars/${calendar.id}`}>View Calendar</Link>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
