import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [creditScore, setCreditScore] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCreditScore = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/api/credit-score");
      setCreditScore(response.data.creditScore);
    } catch (error) {
      console.error("Error fetching credit score:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCreditScore();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      {loading ? (
        <p>Loading your credit score...</p>
      ) : (
        <p className="text-xl">
          Your current credit score:{" "}
          <span className="font-bold text-blue-600">{creditScore}</span>
        </p>
      )}
      <button
        onClick={fetchCreditScore}
        className="mt-6 bg-green-600 text-white p-3 rounded hover:bg-green-700"
      >
        Refresh Credit Score
      </button>
      <button className="mt-4 bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Apply for a Loan
      </button>
    </div>
  );
};

export default Dashboard;
