const createDDiService = require("../services/createDDiService");

const createDDi = async (req, res) => {
  try {
    const { userId, govId, biometricHash } = req.body;
    const ddi = await createDDiService.createDDi(userId, govId, biometricHash);
    res.status(201).json(ddi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createDDi };