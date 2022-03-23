const { expect } = require("chai");
const hre = require("hardhat");

describe("BeeToken", function () {
  it("It should deploy properly", async function () {
    const BeeToken = await hre.ethers.getContractFactory("BeeToken");
    const beeToken = await BeeToken.deploy();
    await beeToken.deployed();

    expect(await beeToken.balanceOf("0xF5b0ed82a0b3e11567081694cC66c3df133f7C8F")).to.equal("1000000000000000000000000000000000");
  });
});
