// Configuration for connecting to the SUI network (testnet, mainnet, or custom network)

module.exports = {
    network: "testnet", // Choose between 'testnet', 'mainnet', or 'devnet'
    endpoints: {
      testnet: "https://fullnode.testnet.sui.io", // Testnet SUI fullnode endpoint
      mainnet: "https://fullnode.mainnet.sui.io", // Mainnet SUI fullnode endpoint
      devnet: "https://fullnode.devnet.sui.io"   // Devnet SUI fullnode endpoint (if needed)
    },
    faucet: {
      testnet: "https://faucet.testnet.sui.io", // Faucet for testnet tokens
      mainnet: "https://faucet.mainnet.sui.io", // Faucet for mainnet tokens
    },
    // Private key for signing transactions (for development only, use with caution)
    privateKey: process.env.SUI_PRIVATE_KEY || "your-private-key-here",  // Load from .env for security
  };