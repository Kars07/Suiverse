import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateDDi from "./components/CreateDDi";
import CreditScore from "./components/CreditScore";
import LoanRequest from "./components/LoanRequest.jsx";
import Navbar from './components/NavBar';
import BodySection from './components/BodySection'; // Import the BodySection component
import LowerBodySection from './components/LowerBodySection';
import ThirdSection from './components/ThirdSection';
import CardSection from './components/CardSection';
import FooterSection from './components/FooterSection';
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <BodySection /> 
      <LowerBodySection/>
      <ThirdSection/>
      <CardSection/>
      <FooterSection/>
    
      <Router>
        <div >
          <header>
            <h1>Suiwise - Decentralized Microloans</h1>
          </header>
          <nav class='form-container'>  
            <a href="/create-ddi">Create DDI</a>
            <a href="/credit-score">Credit Score</a>
            <a href="/loan-request">Loan Request</a>
          </nav>
          <div className="container">
            <p className="container-routes">
              <Routes>
                <Route path="/create-ddi" element={<CreateDDi />} />
                <Route path="/credit-score" element={<CreditScore />} />
                <Route  path="/loan-request" element={<LoanRequest />} />
              </Routes>
              </p>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;