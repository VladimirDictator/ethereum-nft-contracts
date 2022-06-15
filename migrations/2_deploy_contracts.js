const SimpleStorage = artifacts.require('./SimpleStorage.sol');
const Box = artifacts.require('Box');

module.exports = async function (deployer) {
  await deployer.deploy(SimpleStorage);
  await deployer.deploy(Box);
};
