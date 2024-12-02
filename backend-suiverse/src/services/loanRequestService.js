const { connection } = require("../utils/database");

// Create a new loan request
const createLoanRequest = async (borrowerId, lenderId, amount, interestRate, collateralId) => {
  try {
    const [result] = await connection.execute(
      `INSERT INTO loans (borrower_id, lender_id, amount, interest_rate, status, collateral_id)
       VALUES (?, ?, ?, ?, 'pending', ?)`,
      [borrowerId, lenderId, amount, interestRate, collateralId || null]
    );

    return {
      id: result.insertId,
      borrowerId,
      lenderId,
      amount,
      interestRate,
      status: "pending",
    };
  } catch (error) {
    console.error("Error creating loan request:", error.message);
    throw new Error("Failed to create loan request.");
  }
};

// Approve a loan request
const approveLoanRequest = async (loanId) => {
  try {
    const [result] = await connection.execute(
      `UPDATE loans SET status = 'approved' WHERE id = ? AND status = 'pending'`,
      [loanId]
    );

    if (result.affectedRows === 0) {
      throw new Error("Loan not found or already approved.");
    }

    return { loanId, status: "approved" };
  } catch (error) {
    console.error("Error approving loan request:", error.message);
    throw new Error("Failed to approve loan request.");
  }
};

// Repay a loan
const repayLoan = async (loanId, repaymentAmount) => {
  try {
    // Fetch loan details
    const [rows] = await connection.execute(`SELECT amount, interest_rate FROM loans WHERE id = ?`, [loanId]);
    if (rows.length === 0) {
      throw new Error("Loan not found.");
    }

    const loan = rows[0];
    const totalDue = loan.amount + (loan.amount * loan.interest_rate) / 100;

    if (repaymentAmount < totalDue) {
      throw new Error("Insufficient repayment amount.");
    }

    // Mark the loan as repaid
    await connection.execute(`UPDATE loans SET status = 'repaid' WHERE id = ?`, [loanId]);

    return { loanId, status: "repaid" };
  } catch (error) {
    console.error("Error repaying loan:", error.message);
    throw new Error("Failed to repay loan.");
  }
};

module.exports = { createLoanRequest, approveLoanRequest, repayLoan };



