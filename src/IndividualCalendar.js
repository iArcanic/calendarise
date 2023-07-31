// src/IndividualCalendar.js
import React from 'react';
import { useParams } from 'react-router-dom';

const IndividualCalendar = () => {
  const { id } = useParams();

  // Mock data for events of an individual calendar
  const calendarEvents = [
    { id: '1', title: 'Birthday Party', date: '2023-08-10', time: '15:00', description: 'Celebrate a birthday' },
    { id: '2', title: 'Team Meeting', date: '2023-08-15', time: '09:30', description: 'Discuss project progress' },
    // Add more mock events as needed
  ];

  return (
    <div>
      <h1>Individual Calendar View</h1>
      <h2>Calendar ID: {id}</h2>
      <h3>Events</h3>
      {calendarEvents.map((event) => (
        <div key={event.id}>
          <h4>{event.title}</h4>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Description: {event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IndividualCalendar;
