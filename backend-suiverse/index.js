const express = require("express");
const cors = require("cors");
const config = require("./config");
const createDDiController = require("./controllers/createDDiController");
const creditScoreController = require("./controllers/creditScoreController");
const loanRequestController = require("./controllers/loanRequestController");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/ddi", createDDiController.createDDi);
app.get("/credit-score/:userId", creditScoreController.getCreditScore);
app.post("/loan-request", loanRequestController.createLoanRequest);

// Start the server
app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
});