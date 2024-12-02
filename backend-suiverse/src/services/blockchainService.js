const { JsonRpcProvider } = require('@mysten/sui.js');

const provider = new JsonRpcProvider();

const createLoanOnChain = async (borrower, lender, amount, interestRate) => {
  try {
    const tx = await provider.executeTransaction({
      packageObjectId: '<package_id>', // yet to get package id, having issues with the gas(InsufficientGas),despite my code running perfectly, i will committ later after it is resolved
      module: 'loan_system',
      function: 'create_loan',
      arguments: [borrower, lender, amount, interestRate],
      gasBudget: 50000,
    });
    return tx;
  } catch (error) {
    console.error('Error creating loan on-chain:', error);
    throw error;
  }
};

module.exports = { createLoanOnChain };
