const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MiracleNFT");
  const URI = "ipfs://QmazAaJduTT7zmf4WtsWPTjFZxiVKEkD6Hbeozps1PAJJH";
  const WALLET_ADDRESS = "0x688e185bef2a5b4302166115436ECA5FDFaf993E";
  const CONTRACT_ADDRESS = "0x73Bd634a0fDE2eFF6316EC59825465BBfF7A9840";

  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
