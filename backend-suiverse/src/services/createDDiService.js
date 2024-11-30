const createDDi = async (userId, govId, biometricHash) => {
    // Logic to interact with the DDI Sui module
    // Example pseudocode
    const ddi = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      govId,
      biometricHash,
      kycStatus: false,
    };
    return ddi;
  };
  
  module.exports = { createDDi };