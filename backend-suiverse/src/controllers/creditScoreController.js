const creditScoreService = require("../services/creditScoreService");

const getCreditScore = async (req, res) => {
  try {
    const { userId } = req.params;
    const creditScore = await creditScoreService.getCreditScore(userId);
    res.status(200).json(creditScore);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getCreditScore };