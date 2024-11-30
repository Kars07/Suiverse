const createLoanRequest = async (borrower, lender, amount, interestRate, collateralId) => {
    // Logic to create a loan on the blockchain
    return {
      id: Math.random().toString(36).substr(2, 9),
      borrower,
      lender,
      amount,
      interestRate,
      collateralId,
      status: "Pending",
    };
  };
  
  module.exports = { createLoanRequest };