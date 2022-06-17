const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const CollectSlavesForMilies = artifacts.require('CollectSlavesForMilies');
module.exports = async function (deployer) {
  try {
    var instance = await CollectSlavesForMilies.deployed();
    var upgraded = await upgradeProxy(
      instance.address,
      CollectSlavesForMilies,
      {
        deployer,
      }
    );
    console.log('Upgraded', upgraded.address);
  } catch (error) {
    var instance = await deployProxy(CollectSlavesForMilies, [], { deployer });
    console.log('Deployed', instance.address);
  }
};
