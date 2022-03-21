const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("BeeToken", function () {
  it("It should deploy properly", async function () {
    const BeeToken = await hre.ethers.getContractFactory("BeeToken");
    const beeToken = await BeeToken.deploy();
    await beeToken.deployed();
  });
});
