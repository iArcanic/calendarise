// src/contexts/CalendarContext.js
import React, { createContext, useState } from 'react';

const CalendarContext = createContext();

const CalendarProvider = ({ children }) => {
  // Mock data for user calendars
  const initialCalendars = [
    {
      id: '1',
      name: 'Family Events',
      description: 'Family gatherings and events',
      events: [
        { title: 'Family Reunion', date: '2023-08-10' },
        { title: 'Birthday Party', date: '2023-08-15' },
        // Add more events for this calendar
      ],
    },
    {
      id: '2',
      name: 'Work Schedule',
      description: 'Work-related events and meetings',
      events: [
        { title: 'Team Meeting', date: '2023-08-12' },
        { title: 'Project Deadline', date: '2023-08-20' },
        // Add more events for this calendar
      ],
    },
    // Add more mock calendars with events as needed
  ];

  const [calendars, setCalendars] = useState(initialCalendars);

  return (
    <CalendarContext.Provider value={{ calendars, setCalendars }}>
      {children}
    </CalendarContext.Provider>
  );
};

export { CalendarContext, CalendarProvider };
