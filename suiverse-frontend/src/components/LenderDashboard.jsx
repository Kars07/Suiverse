import React, { useState, useEffect } from "react";

const LenderDashboard = () => {
  const [pendingLoans, setPendingLoans] = useState([]);

  useEffect(() => {
    // Fetch pending loans from the backend
    fetch("http://localhost:5000/loans/pending")
      .then((res) => res.json())
      .then((data) => setPendingLoans(data))
      .catch((err) => console.error(err));
  }, []);

  const approveLoan = (loanId) => {
    fetch("http://localhost:5000/approve-loan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ loanId }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Loan approved:", data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Lender Dashboard</h1>
      <ul>
        {pendingLoans.map((loan) => (
          <li key={loan.id}>
            Loan ID: {loan.id}, Amount: {loan.amount}
            <button onClick={() => approveLoan(loan.id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LenderDashboard;
