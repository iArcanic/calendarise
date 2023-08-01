// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Update the import statement here
import MainPage from './MainPage';
import IndividualCalendar from './IndividualCalendar';
import CreateCalendar from './CreateCalendar';
import Calendar from './Calendar';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Routes> {/* Update Switch to Routes */}
          <Route path="/" element={<MainPage />} />
          <Route path="/calendars/:id" element={<IndividualCalendar />} />
	  <Route path="/new-calendar" element={<CreateCalendar />} />
	  <Route path="/calendar" element={<Calendar />} /> {/* Add the route */}
        </Routes> {/* Update Route to use "element" prop */}
      </div>
    </Router>
  );
};

export default App;
