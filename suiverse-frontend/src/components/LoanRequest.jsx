import React, { useState } from "react";

const LoanRequest = () => {
  const [borrower, setBorrower] = useState("");
  const [lender, setLender] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call backend API to create loan request
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Borrower"
        onChange={(e) => setBorrower(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lender"
        onChange={(e) => setLender(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Request Loan</button>
    </form>
  );
};

export default LoanRequest;