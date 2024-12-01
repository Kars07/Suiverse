// services/blockchain.js

// Example async function to get data from Sui blockchain
export const getSuiData = async () => {
    try {
      // Make the actual call to the Sui blockchain (replace this with your logic)
      const response = await fetch("/api/sui-data"); // Fetch from backend or directly from Sui
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Blockchain fetch failed.");
    }
  };