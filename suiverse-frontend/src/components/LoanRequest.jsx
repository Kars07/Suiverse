import React, { useState } from "react";

const LoanRequest = () => {
  const [borrower, setBorrower] = useState("");
  const [lender, setLender] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //api call
      const response = await fetch("http://localhost:5000/api/loan-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ borrower, lender, amount }),
      });
      const data = await response.json();
      console.log("Loan Requested:", data);
    } catch (error) {
      console.error("Error requesting loan:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Request a Loan</h2>
      <input
        type="text"
        placeholder="Borrower Name"
        value={borrower}
        onChange={(e) => setBorrower(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md"
      />
      <input
        type="text"
        placeholder="Lender Name"
        value={lender}
        onChange={(e) => setLender(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md"
      />
      <input
        type="number"
        placeholder="Loan Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md"
      />
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Submit Request
      </button>
    </form>
  );
};

export default LoanRequest;
