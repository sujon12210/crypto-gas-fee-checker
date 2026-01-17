const { ethers } = require("ethers");
const config = require("./config");

async function getGasPrice() {
  const provider = new ethers.providers.JsonRpcProvider(config.rpcUrl);
  const gas = await provider.getGasPrice();

  const gwei = ethers.utils.formatUnits(gas, "gwei");

  return {
    slow: gwei,
    normal: (parseFloat(gwei) * 1.2).toFixed(2),
    fast: (parseFloat(gwei) * 1.5).toFixed(2)
  };
}

module.exports = { getGasPrice };
