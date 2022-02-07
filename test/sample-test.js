const { expect } = require("chai");

describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    [owner] = await ethers.getSigners();
    console.log("deployer address: ", owner.address);
    const NFT = await ethers.getContractFactory("MiracleNFT");
    const nft = await NFT.deploy();
    console.log("contract address: ", nft.address);
    const URI = "ipfs://QmazAaJduTT7zmf4WtsWPTjFZxiVKEkD6Hbeozps1PAJJH";
    await nft.deployed();
    await nft.mint("0xd562FFBbb55A07A7b6D90Ed750e903EDa9A2Ce28", URI);
    expect(await nft.tokenURI(1)).to.equal(URI);
  });
  it("The contract will only be called by the admin of the contract.", async function() {
    [owner] = await ethers.getSigners();
    console.log("deployer address: ", owner.address);
    const NFT = await ethers.getContractFactory("MiracleNFT");
    const nft = await NFT.deploy();
    console.log("contract address: ", nft.address);
    const URI = "ipfs://QmazAaJduTT7zmf4WtsWPTjFZxiVKEkD6Hbeozps1PAJJH";
    await nft.deployed();
    await expect(nft.mint('0xd562FFBbb55A07A7b6D90Ed750e903EDa9A2Ce28', URI, {from: '0xd562FFBbb55A07A7b6D90Ed750e903EDa9A2Ce28'  })).to.be.reverted;
  });
  it("The recipient will be different from the owner of the contract.", async function() {
    [owner] = await ethers.getSigners();
    console.log("deployer address: ", owner.address);
    const NFT = await ethers.getContractFactory("MiracleNFT");
    const nft = await NFT.deploy();
    console.log("contract address: ", nft.address);
    const URI = "ipfs://QmazAaJduTT7zmf4WtsWPTjFZxiVKEkD6Hbeozps1PAJJH";
    await nft.deployed();
    await expect(nft.mint(owner.address, URI)).to.be.revertedWith(
      "The recipient will be different from the owner of the contract."
    );
    // expect(await nft.tokenURI(1)).to.equal(URI);
  });
});