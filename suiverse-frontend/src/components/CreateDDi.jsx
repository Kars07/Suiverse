import React, { useState } from "react";

const CreateDDi = () => {
  const [govId, setGovId] = useState("");
  const [biometricHash, setBiometricHash] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call backend API
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Government ID" onChange={(e) => setGovId(e.target.value)} />
      <input
        type="text"
        placeholder="Biometric Hash"
        onChange={(e) => setBiometricHash(e.target.value)}
      />
      <button type="submit">Create DDI</button>
    </form>
  );
};

export default CreateDDi;