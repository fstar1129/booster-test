import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import "@nomiclabs/hardhat-etherscan";
import 'hardhat-typechain';
import 'hardhat-deploy';
import '@openzeppelin/hardhat-upgrades';
require("dotenv").config();

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
const config: HardhatUserConfig = {
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  solidity: {
    compilers: [
      {
        version: '0.6.8',
        settings: {
          optimizer: {
            enabled: true,
          },
        },
      },
    ],
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY]
    },
    hardhat: {
      chainId: 1337,
      // throwOnTransactionFailures: true,
      // throwOnCallFailures: true,
      //allowUnlimitedContractSize: true,
    }, 
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      chainId: 4,
      gasPrice: 20000000000,
      accounts: [process.env.PRIVATEKEY]
    },
    fantom: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 4002,
      gasPrice: 2000000000000,
      accounts: [process.env.PRIVATEKEY]
    },
    
  }, 

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 200000
  }
};

export default config;
