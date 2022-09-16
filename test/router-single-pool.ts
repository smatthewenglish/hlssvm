import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("GoldenTicket Test", function () {

  // IERC721Mintable test721;
  // ICurve bondingCurve;
  // LSSVMPairFactory factory;
  // LSSVMRouter router;
  // LSSVMPair pair;
  // address payable constant feeRecipient = payable(address(69));
  // uint256 constant protocolFeeMultiplier = 3e15;
  // uint256 constant numInitialNFTs = 10;

  let addrX;
  let addrs;

  beforeEach(async function () {
      [addrX, ...addrs] = await ethers.getSigners();

      // bondingCurve = setupCurve();
      // test721 = setup721();
      // LSSVMPairETH enumerableETHTemplate = new LSSVMPairEnumerableETH();
      // LSSVMPairETH missingEnumerableETHTemplate = new LSSVMPairMissingEnumerableETH();
      // LSSVMPairERC20 enumerableERC20Template = new LSSVMPairEnumerableERC20();
      // LSSVMPairERC20 missingEnumerableERC20Template = new LSSVMPairMissingEnumerableERC20();
      // factory = new LSSVMPairFactory(
      //     enumerableETHTemplate,
      //     missingEnumerableETHTemplate,
      //     enumerableERC20Template,
      //     missingEnumerableERC20Template,
      //     feeRecipient,
      //     protocolFeeMultiplier
      // );
      // router = new LSSVMRouter(factory);
      // factory.setBondingCurveAllowed(bondingCurve, true);
      // factory.setRouterAllowed(router, true);

      // // set NFT approvals
      // test721.setApprovalForAll(address(factory), true);
      // test721.setApprovalForAll(address(router), true);

      // // Setup pair parameters
      // uint128 delta = 0 ether;
      // uint128 spotPrice = 1 ether;
      // uint256[] memory idList = new uint256[](numInitialNFTs);
      // for (uint256 i = 1; i <= numInitialNFTs; i++) {
      //     test721.mint(address(this), i);
      //     idList[i - 1] = i;
      // }

      // // Create a pair with a spot price of 1 eth, 10 NFTs, and no price increases
      // pair = this.setupPair{value: modifyInputAmount(10 ether)}(
      //     factory,
      //     test721,
      //     bondingCurve,
      //     payable(address(0)),
      //     LSSVMPair.PoolType.TRADE,
      //     modifyDelta(uint64(delta)),
      //     0,
      //     spotPrice,
      //     idList,
      //     10 ether,
      //     address(router)
      // );

      // // mint extra NFTs to this contract (i.e. to be held by the caller)
      // for (uint256 i = numInitialNFTs + 1; i <= 2 * numInitialNFTs; i++) {
      //     test721.mint(address(this), i);
      // }

  });

  it("test 00: xxx", async function () {

      //
      //await goldenTicket.mint(addrs[0].address);

      //let output00 = await goldenTicket.tokenURI(7);
      //console.log("output00: " + output00);

      //let output01 = await goldenTicket.name();
      //console.log("output01: " + output01);

  });

});

// describe("Lock", function () {
//   // We define a fixture to reuse the same setup in every test.
//   // We use loadFixture to run this setup once, snapshot that state,
//   // and reset Hardhat Network to that snapshot in every test.
//   async function deployOneYearLockFixture() {
//     const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//     const ONE_GWEI = 1_000_000_000;

//     const lockedAmount = ONE_GWEI;
//     const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

//     // Contracts are deployed using the first signer/account by default
//     const [owner, otherAccount] = await ethers.getSigners();

//     const Lock = await ethers.getContractFactory("Lock");
//     const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//     return { lock, unlockTime, lockedAmount, owner, otherAccount };
//   }

//   describe("Deployment", function () {
//     it("Should set the right unlockTime", async function () {
//       const { lock, unlockTime } = await loadFixture(deployOneYearLockFixture);

//       expect(await lock.unlockTime()).to.equal(unlockTime);
//     });

//     it("Should set the right owner", async function () {
//       const { lock, owner } = await loadFixture(deployOneYearLockFixture);

//       expect(await lock.owner()).to.equal(owner.address);
//     });

//     it("Should receive and store the funds to lock", async function () {
//       const { lock, lockedAmount } = await loadFixture(
//         deployOneYearLockFixture
//       );

//       expect(await ethers.provider.getBalance(lock.address)).to.equal(
//         lockedAmount
//       );
//     });

//     it("Should fail if the unlockTime is not in the future", async function () {
//       // We don't use the fixture here because we want a different deployment
//       const latestTime = await time.latest();
//       const Lock = await ethers.getContractFactory("Lock");
//       await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
//         "Unlock time should be in the future"
//       );
//     });
//   });

// });
