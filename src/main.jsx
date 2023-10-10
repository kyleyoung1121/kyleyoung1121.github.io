import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component here
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render your main App component */}
  </React.StrictMode>,
  document.getElementById('root') // Render into the HTML root element
);