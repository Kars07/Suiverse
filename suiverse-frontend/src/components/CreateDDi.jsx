import React, { useState } from "react";

const CreateDDI = () => {
  const [govId, setGovId] = useState("");
  const [biometricHash, setBiometricHash] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Example API call - replace with actual endpoint
      const response = await fetch("http://localhost:5000/api/create-ddi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ govId, biometricHash }),
      });
      const data = await response.json();
      console.log("DDI Created:", data);
    } catch (error) {
      console.error("Error creating DDI:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Create Digital Decentralized Identity</h2>
      <input
        type="text"
        placeholder="Government ID"
        value={govId}
        onChange={(e) => setGovId(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md"
      />
      <input
        type="text"
        placeholder="Biometric Hash"
        value={biometricHash}
        onChange={(e) => setBiometricHash(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md"
      />
      <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Create DDI
      </button>
    </form>
  );
};

export default CreateDDI;
