const ethers = require('ethers');

const CONTRACT_ADDRESS = '0x824611a6862d9e3a3ddED7e1879dA6084Dc9a035';
const META_DATA_URL =
  'ipfs://bafyreiesbkaa4bphh3pb2qemhlupb7si457gjz4octoubqulnvejdugq34';
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory('ExampleNFT');
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log('NFT minted to: ', owner.address);
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
