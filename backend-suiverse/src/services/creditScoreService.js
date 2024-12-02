const getCreditScore = async (userId) => {
    // fetching credit score from Sui blockchain
    return { userId, score: 600 }; //Return default score
  };
  
  module.exports = { getCreditScore };