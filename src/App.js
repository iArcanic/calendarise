// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Update the import statement here
import MainPage from './MainPage';
import IndividualCalendar from './IndividualCalendar';

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
        </Routes> {/* Update Route to use "element" prop */}
      </div>
    </Router>
  );
};

export default App;
