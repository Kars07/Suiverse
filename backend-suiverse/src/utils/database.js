const mysql = require("mysql2/promise");
const config = require("../config/config");

let connection;

// Initialize and export the database connection
const initDB = async () => {
  try {
    connection = await mysql.createPool({
      host: process.env.DB_HOST || config.DB_HOST,
      user: process.env.DB_USER || config.DB_USER,
      password: process.env.DB_PASSWORD || config.DB_PASSWORD,
      database: process.env.DB_NAME || config.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
};

module.exports = { initDB, connection };
