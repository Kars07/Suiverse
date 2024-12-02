const express = require("express");
const cors = require("cors");
const config = require("./config");
const createDDiController = require("./controllers/createDDiController");
const creditScoreController = require("./controllers/creditScoreController");
const loanRequestController = require("./controllers/loanRequestController");
const conversionController = require("./controllers/conversionController");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/ddi", createDDiController.createDDi);
app.get("/credit-score/:userId", creditScoreController.getCreditScore);
app.post("/loan-request", loanRequestController.createLoanRequest);
app.post("/approve-loan", loanRequestController.approveLoanRequest);
app.post("/repay-loan", loanRequestController.repayLoan);
app.get("/conversion-rate", conversionController.getExchangeRate);
app.get("/loans/borrower/:userId", loanRequestController.getBorrowerLoans);
app.get("/loans/pending", loanRequestController.getPendingLoans);
app.post("/approve-loan", loanRequestController.approveLoanRequest);

// Start the server
app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
});
