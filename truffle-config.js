const path = require('path');

const {
  mnemonic,
  alchemyApiKey,
  infuraAPI,
  infuraRinkebyAPI,
} = require('./secrets.json');

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, 'client/src/contracts'),
  networks: {
    develop: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '5777',
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraRinkebyAPI}`
        ),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlock: 200,
      skipDryRun: true,
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://polygon-mumbai.g.alchemy.com/v2/${alchemyApiKey}`
        ),
      network_id: "80001",
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: '^0.8.0',
    },
  },
};
