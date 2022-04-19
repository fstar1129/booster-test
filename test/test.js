const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

describe("Booster Contract Testing", function() {
    before(async () => {
        [...accounts] = await ethers.getSigners();
        console.log("address list", accounts[0].address);

        Nft_1 = await ethers.getContractFactory("Nft_1");
        nft_1 = await Nft_1.deploy();
        Nft_2 = await ethers.getContractFactory("Nft_2");
        nft_2 = await Nft_2.deploy();
        Nft_3 = await ethers.getContractFactory("Nft_3");
        nft_3 = await Nft_3.deploy();
        Nft_booster = await ethers.getContractFactory("Nft_boost");
        nft_booster = await Nft_booster.deploy();

        console.log('owner of nft contracts', await nft_1.owner());
        console.log('owner of nft contracts', await nft_2.owner());
        console.log('owner of nft contracts', await nft_3.owner());
        console.log('owner of nft contracts', await nft_booster.owner());

        Booster = await ethers.getContractFactory("Booster");
        booster = await Booster.deploy(nft_1.address, nft_2.address, nft_3.address, nft_booster.address);
        
        // instance = booster.deployed();

        await nft_booster.setController(booster.address);
        await nft_1.setController(booster.address);
        await nft_2.setController(booster.address);
        await nft_3.setController(booster.address);
        tx1 = await nft_booster.connect(accounts[0]).mint(accounts[3].address, 0);
        tx2 = await nft_booster.connect(accounts[0]).mint(accounts[3].address, 1);
        tx3 = await nft_booster.connect(accounts[0]).mint(accounts[3].address, 2);
    });

    it("Check user wallet before taking boosterNft", async () => {
        expect(await nft_booster.balanceOf(accounts[3].address) / 1).to.equal(3);
        expect(await nft_1.balanceOf(accounts[3].address) / 1).to.equal(0);
        expect(await nft_2.balanceOf(accounts[3].address) / 1).to.equal(0);
        expect(await nft_3.balanceOf(accounts[3].address) / 1).to.equal(0);
    });

    it("Check user wallet after taking boosterNft", async () => {
        await booster.receiveBoosterPackNFT(0, accounts[3].address);
        expect(await nft_booster.balanceOf(accounts[3].address) / 1).to.equal(2);
        expect(await nft_1.balanceOf(accounts[3].address) / 1).to.equal(1);
        expect(await nft_2.balanceOf(accounts[3].address) / 1).to.equal(1);
        expect(await nft_3.balanceOf(accounts[3].address) / 1).to.equal(1);
    });

    it("Check user wallet after taking boosterNft twice", async () => {
        await booster.receiveBoosterPackNFT(1, accounts[3].address);
        expect(await nft_booster.balanceOf(accounts[3].address) / 1).to.equal(1);
        expect(await nft_1.balanceOf(accounts[3].address) / 1).to.equal(2);
        expect(await nft_2.balanceOf(accounts[3].address) / 1).to.equal(2);
        expect(await nft_3.balanceOf(accounts[3].address) / 1).to.equal(2);
    });
});