const fetch = require("node-fetch");

const getExchangeRate = async (req, res) => {
  try {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await response.json();
    const rate = data.rates.NGN;
    res.status(200).json({ rate });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch exchange rate" });
  }
};

module.exports = { getExchangeRate };
