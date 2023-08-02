// src/App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import MainPage from './MainPage';
import CreateCalendar from './CreateCalendar';
import FullCalendarComponent from './FullCalendar';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
	  <Route path="/new-calendar" element={<CreateCalendar />} />
	  <Route path="/calendars/:id" element={<FullCalendarComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
