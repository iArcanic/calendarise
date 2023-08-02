// src/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import MainPage from './MainPage';
import CreateCalendar from './CreateCalendar';
import FullCalendarComponent from './FullCalendar';
import { CalendarProvider } from './CalendarContext';

const App = () => {
  return (
    <Router>
      <div>
        <CalendarProvider>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/calendars/:id" element={<FullCalendarComponent />} /> {/* Individual Calendar page */}
            <Route path="/new-calendar" element={<CreateCalendar />} />
          </Routes>
        </CalendarProvider>
      </div>
    </Router>
  );
};

export default App;
