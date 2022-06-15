const GetSlavesForMilies = artifacts.require('GetSlavesForMilies');

module.exports = async function (deployer) {
  await deployer.deploy(GetSlavesForMilies);
};
