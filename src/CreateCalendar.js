// src/CreateCalendar.js
import React, { useState } from 'react';

const CreateCalendar = () => {
  const [calendarName, setCalendarName] = useState('');
  const [calendarDescription, setCalendarDescription] = useState('');
  
  const handleCreateCalendar = () => {
	  console.log('Creating a new calendar', calendarName, calendarDescription);
  };

  return (
    <div>
      <h1>Create New Calendar</h1>
      <form>
        <div>
          <label htmlFor="calendarName">Calendar Name:</label>
          <input
            type="text"
            id="calendarName"
            value={calendarName}
            onChange={(e) => setCalendarName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="calendarDescription">Description:</label>
          <textarea
            id="calendarDescription"
            value={calendarDescription}
            onChange={(e) => setCalendarDescription(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={handleCreateCalendar}>
            Create Calendar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCalendar;
