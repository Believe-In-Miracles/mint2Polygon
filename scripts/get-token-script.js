const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MiracleNFT");
  const CONTRACT_ADDRESS = "0x73Bd634a0fDE2eFF6316EC59825465BBfF7A9840";

  const contract = NFT.attach(CONTRACT_ADDRESS);

  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
