import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import dotenv from "dotenv"

dotenv.config();

// const TESTNET_RPC = process.env.TESTNET_RPC
// const PRIVATE_KEY = process.env.PRIVATE_KEY as string
// const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: process.env.TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY as string]

    },
  },
  etherscan: {
   apiKey : process.env.POLYGONSCAN_API_KEY
  }
};

export default config;
