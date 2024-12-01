import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App"; 
import "./index.css"; 

const root = ReactDOM.createRoot(document.getElementById("root")); //the root div where React will be mounted

root.render(
  <React.StrictMode>
    <App />  {/* Render your main App component */}
  </React.StrictMode>
);