// src/Calendar.js
import React from 'react';
import FullCalendarComponent from './FullCalendar';

const Calendar = () => {
  // Replace this with actual calendar data fetched from Firestore or elsewhere
  const calendarEvents = [
    { title: 'Event 1', date: '2023-08-10' },
    { title: 'Event 2', date: '2023-08-15' },
    // Add more calendar events here
  ];

  return (
    <div>
      <h2>Calendar View</h2>
      <FullCalendarComponent events={calendarEvents} />
    </div>
  );
};

export default Calendar;
