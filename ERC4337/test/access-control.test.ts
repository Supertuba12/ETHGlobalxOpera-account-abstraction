import {describe} from 'mocha'
import {Wallet} from "ethers";
import {ethers} from "hardhat";
import {expect} from "chai";
import {
 EntryPoint,
 OperaSmartWallet,
 OperaSmartWallet__factory,
} from "../typechain";
import {
 createWalletOwner,
 deployEntryPoint,
} from "./testutils";
import {parseEther} from "ethers/lib/utils";


describe("OperaSmartWallet", function () {

 let entryPoint: EntryPoint;
 let accounts: string[]
 let walletOwner: Wallet
 let ethersSigner = ethers.provider.getSigner();
 let guardians: string[];
 let anOwner: string;
 let wallet: OperaSmartWallet;
 const globalUnstakeDelaySec = 2
 const paymasterStake = ethers.utils.parseEther('2')



 before(async function () {
  accounts = await ethers.provider.listAccounts()
  anOwner = accounts[0]
  if (accounts.length < 2) this.skip()
  walletOwner = createWalletOwner()
  guardians = [accounts[1]]

  entryPoint = await deployEntryPoint(paymasterStake, globalUnstakeDelaySec)
  wallet = await new OperaSmartWallet__factory(ethers.provider.getSigner()).deploy(entryPoint.address, anOwner, guardians)
  await ethersSigner.sendTransaction({from: accounts[0], to: wallet.address, value: parseEther('2')})
 })

 it('should set the supplied owner as owner', async () => {
  expect(await wallet.getOwnerCount()).to.equal(1);
  expect(await wallet.getOwner(0)).to.equal(anOwner);
 });
 it('should set the supplied guardians as guardians', async () => {
  expect(await wallet.getGuardianCount()).to.equal(1);
  expect(await wallet.getGuardian(0)).to.equal(guardians[0]);
 });
});
