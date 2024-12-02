import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateDDI from "./components/CreateDDI";
import CreditScore from "./components/CreditScore";
import LoanRequest from "./components/LoanRequest";
import BodySection from "./components/BodySection";
import Dashboard from "./components/Dashboard";
import BorrowerDashboard from "./components/BorrowerDashboard";
import LenderDashboard from "./components/LenderDashboard";
import SignupPage from "./components/SignupPage";
import NavBar from "./components/NavBar";
import FooterSection from "./components/FooterSection";
import ThirdSection from "./components/ThirdSection";
import AboutUs from "./components/AboutUs";
import "./App.css";

const App = () => {
  const [blockchainData, setBlockchainData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlockchainData = async () => {
      try {
        // Replace with actual blockchain data fetch function
        const response = await fetch("http://localhost:5000/api/blockchain-data");
        const data = await response.json();
        setBlockchainData(data);
      } catch (err) {
        setError("Failed to fetch data from blockchain");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlockchainData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Router>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<BodySection />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/borrower-dashboard" element={<BorrowerDashboard />} />
          <Route path="/lender-dashboard" element={<LenderDashboard />} />
          <Route path="/create-ddi" element={<CreateDDI />} />
          <Route path="/credit-score" element={<CreditScore userId="12345" />} />
          <Route path="/loan-request" element={<LoanRequest />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
