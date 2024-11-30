import { Wallet, Network } from '@mysten/sui.js';

// SUI Wallet service to handle wallet connection and transactions
const suiWalletService = {
  // Check if the wallet is available in the browser
  isWalletAvailable: () => {
    return window.sui !== undefined;
  },

  // Connect to the wallet and request permission
  connectWallet: async () => {
    try {
      if (!suiWalletService.isWalletAvailable()) {
        throw new Error('Sui Wallet is not available');
      }
      const wallet = await window.sui.connect(); // Connect to Sui Wallet
      return wallet;
    } catch (error) {
      console.error('Error connecting to wallet:', error);
      return null;
    }
  },

  // Get the current wallet address
  getWalletAddress: async () => {
    try {
      const wallet = await suiWalletService.connectWallet();
      if (wallet) {
        return wallet.address(); // Get wallet address
      } else {
        throw new Error('No wallet connected');
      }
    } catch (error) {
      console.error('Error getting wallet address:', error);
      return null;
    }
  },

  // Send a transaction using the wallet
  sendTransaction: async (transaction) => {
    try {
      const wallet = await suiWalletService.connectWallet();
      if (wallet) {
        const signedTransaction = await wallet.signTransaction(transaction); // Sign the transaction
        return signedTransaction;
      }
    } catch (error) {
      console.error('Error sending transaction:', error);
    }
  }
};

export default suiWalletService;