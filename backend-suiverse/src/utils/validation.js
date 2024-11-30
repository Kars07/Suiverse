const validateLoanRequest = (data) => {
    if (!data.borrower || !data.lender || data.amount <= 0) {
      throw new Error("Invalid loan request data");
    }
  };
  
  module.exports = { validateLoanRequest };