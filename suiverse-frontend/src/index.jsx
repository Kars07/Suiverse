// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App'; // Import the App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Access root div from HTML
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);