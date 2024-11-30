// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App.jsx'; // Import the main App component

// Assuming we need some additional configuration or bootstrapping for your app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is the div where your app gets rendered
);