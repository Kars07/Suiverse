import React, { useEffect, useState } from "react";

const CreditScore = ({ userId }) => {
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Fetch credit score from backend
  }, [userId]);

  return <div>Credit Score: {score || "Loading..."}</div>;
};

export default CreditScore;