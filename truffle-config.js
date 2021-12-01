require("dotenv").config
const HDWalletProvider = require("@truffle/hdwallet-provider");
 const mnemonic = 'Your mnemonic here';
 const infuraURL = "https://ropsten.infura.io/v3/<project id here>'";

module.exports = {
  networks: {
   development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
   },
   ropsten: {
    provider: () => new HDWalletProvider (mnemonic, infuraURL),
  network_id: 3,
  gas: 5500000,
  confirmations: 2,
  timeoutBlocks: 200,
  skipDryRun: false
  },

  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }

}