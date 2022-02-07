1. upload metadata to IPFS with image link using pinata. 
2. Use hardhat, and openzeppelin ERC 721, Counters, Ownable library.
3. To do satisfy the first one, add onlyOwner modifier to mint function
4. To do satisfy the second one, add require for checking the address.
5. deploy and test...


#IPFS
upload metadata to ipfs with image link.
https://ipfs.io/ipfs/QmazAaJduTT7zmf4WtsWPTjFZxiVKEkD6Hbeozps1PAJJH

"npm install"

#Test
"npx hardhat test"

#Deploy
"npx hardhat run scripts/deploy-script.js --network matic"

#Mint
Before do this, check addresses in mint-script.js:
"npx hardhat run scripts/mint-script.js --network matic"

#Get token
Before do this, check address in get-token-script.js:
"npx hardhat run scripts/get-token-script.js --network matic"
