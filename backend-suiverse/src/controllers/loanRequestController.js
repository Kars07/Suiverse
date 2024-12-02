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

const approveLoanRequest = async (req, res) => {
  try {
    const { loanId } = req.body;
    const loan = await loanRequestService.approveLoanRequest(loanId);
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const repayLoan = async (req, res) => {
  try {
    const { loanId, repaymentAmount } = req.body;
    const loan = await loanRequestService.repayLoan(loanId, repaymentAmount);
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createLoanRequest, approveLoanRequest, repayLoan };
