import React, { useEffect, useState } from "react";

const CreditScore = ({ userId }) => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    const fetchCreditScore = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/credit-score/${userId}`);
        const data = await response.json();
        setScore(data.creditScore);
      } catch (error) {
        console.error("Error fetching credit score:", error);
      }
    };
    fetchCreditScore();
  }, [userId]);

  return (
    <div className="p-6 bg-white shadow-md rounded-md text-center">
      <h2 className="text-xl font-bold mb-4">Your Credit Score</h2>
      <p className="text-lg">{score !== null ? `Credit Score: ${score}` : "Loading..."}</p>
    </div>
  );
};

export default CreditScore;
