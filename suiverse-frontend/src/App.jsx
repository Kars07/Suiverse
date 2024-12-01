import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateDDi from "./components/CreateDDi";
import CreditScore from "./components/CreditScore";
import LoanRequest from "./components/LoanRequest";
import BodySection from "./components/BodySection";
import Dashboard from "./components/Dashboard";
import SignupPage from "./components/SignupPage";
import NavBar from "./components/NavBar"; 
import { getSuiData } from "./services/blockchain";
import './App.css';


function App() {
  const userId = "12345"; // Example userId
  const App = () => {
    // State to hold blockchain data
    const [blockchainData, setBlockchainData] = useState(null);
    const [loading, setLoading] = useState(true); // For loading state
    const [error, setError] = useState(null); // For error handling
  
    // This useEffect will run when the component mounts
    useEffect(() => {
      // Async function to fetch blockchain data
      const fetchBlockchainData = async () => {
        try {
          const data = await getSuiData(); // Replace with actual function to get data from Sui
          setBlockchainData(data);
        } catch (err) {
          setError("Failed to fetch data from blockchain");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchBlockchainData();
    }, []); // Empty array means this will only run once (on mount)
  
    if (loading) return <div>Loading...</div>;  // Show loading indicator
    if (error) return <div>{error}</div>;  // Show error message if any
  
  
  
  e
  return (
    <Router>
      <header className="header">
        <h1>Suiwise - Decentralized Microloans</h1>
      </header>

      <nav className="form-container">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/create-ddi" className="nav-link">Create DDI</Link>
        <Link to="/credit-score" className="nav-link">Credit Score</Link>
        <Link to="/loan-request" className="nav-link">Loan Request</Link>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<BodySection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-ddi" element={<CreateDDi />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/credit-score" element={<CreditScore userId={userId} />} />
          <Route path="/loan-request" element={<LoanRequest />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </Router>
  );
}
}

export default App;
