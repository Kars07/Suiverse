import React, { useState, useEffect } from "react";

const BorrowerDashboard = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Fetch the borrower's loans from the backend
    fetch(`http://localhost:5000/loans/borrower/${userId}`)

      .then((res) => res.json())
      .then((data) => setLoans(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Borrower Dashboard</h1>
      <ul>
        {loans.map((loan) => (
          <li key={loan.id}>
            Loan ID: {loan.id}, Amount: {loan.amount}, Status: {loan.status}
          </li>
        ))}
      </ul>
      <button onClick={() => window.location.href = "/loan-request"}>Request Loan</button>
    </div>
  );
};

export default BorrowerDashboard;
