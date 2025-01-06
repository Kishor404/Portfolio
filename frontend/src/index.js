import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new ReactDOM method
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; // Global styles
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
