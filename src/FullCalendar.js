// src/FullCalendar.js
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import { CalendarContext } from './CalendarContext.js';

const FullCalendarComponent = () => {

  const { id } = useParams();
  const { calendars } = useContext(CalendarContext);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch calendar data based on the ID from the context
    const selectedCalendar = calendars.find((calendar) => calendar.id === id);

    if (selectedCalendar) {
      setEvents(selectedCalendar.events);
    }
  }, [id, calendars]);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
};

export default FullCalendarComponent;
