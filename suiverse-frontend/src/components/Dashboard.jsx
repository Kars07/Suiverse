import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [creditScore, setCreditScore] = useState(null); 
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch credit score from the backend
  const fetchCreditScore = async () => {
    try {
      setLoading(true); // Show loader while fetching
      const response = await axios.get("http://localhost:5000/api/credit-score"); // Replace with your API endpoint
      setCreditScore(response.data.creditScore); // Assuming backend returns { creditScore: 750 }
      setLoading(false); // Stop loader
    } catch (error) {
      console.error("Error fetching credit score:", error);
      setLoading(false); // Stop loader even on error
    }
  };

  // Fetch credit score when the component mounts
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