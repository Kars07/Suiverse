const dotenv = require("dotenv");
dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL,
  SUI_RPC_ENDPOINT: process.env.SUI_RPC_ENDPOINT,
};

module.exports = config;