const loanRequestService = require("../services/loanRequestService");

const createLoanRequest = async (req, res) => {
  try {
    const { borrower, lender, amount, interestRate, collateralId } = req.body;
    const loan = await loanRequestService.createLoanRequest(
      borrower,
      lender,
      amount,
      interestRate,
      collateralId
    );
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createLoanRequest };