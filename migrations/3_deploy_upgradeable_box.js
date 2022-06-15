const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const BoxV2 = artifacts.require('BoxV2');

module.exports = async function (deployer) {
    await deployProxy(BoxV2, ['0x824611a6862d9e3a3ddED7e1879dA6084Dc9a035'], { deployer, initializer: 'initialize' });
  };