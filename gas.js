const { getGasPrice } = require("./fees");

async function start() {
  const prices = await getGasPrice();

  console.log("Gas Fees:");
  console.log("Slow:", prices.slow, "gwei");
  console.log("Normal:", prices.normal, "gwei");
  console.log("Fast:", prices.fast, "gwei");
}

start();
