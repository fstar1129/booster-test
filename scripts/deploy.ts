import { ethers } from 'ethers';
// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const Nft_a = await hre.ethers.getContractFactory("Booster");
  const nftA = await Nft_a.deploy('0x1B02C339881e1B846C5E565d69Ba60449a3544B5', '0x17F9Fa83E82435cb658B4d5D4aE06843081736F8','0xcC60C3d8C0A1C30382Baa3636A02bfDffFF13725', '0x24f2b00AFB95381a4eb992Cc0AE91C2901C86dB4');

  await nftA.deployed();
  console.log("Booster deployed to:", nftA.address);
  // const Nft_a = await hre.ethers.getContractFactory("Nft_boost");
  // const nftA = await Nft_a.deploy();

  // await nftA.deployed();
  // console.log("Nft deployed to:", nftA.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
