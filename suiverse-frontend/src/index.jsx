import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Link to global styles
import App from "./App"; // Link to main App component

const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure this matches your index.html

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
