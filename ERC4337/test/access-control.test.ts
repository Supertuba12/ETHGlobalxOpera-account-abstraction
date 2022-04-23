import {describe} from 'mocha'
import {Signer, Wallet} from "ethers";
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
import {fillAndSign} from "./UserOp";


describe("OperaSmartWallet", function () {
 let entryPoint: EntryPoint;
 let accounts: string[]
 let walletOwner: Wallet
 let ethersSigner = ethers.provider.getSigner();
 let guardian: string;
 let anOwner: string;
 let wallet: OperaSmartWallet;
 const globalUnstakeDelaySec = 2
 const paymasterStake = ethers.utils.parseEther('2')

 before(async function () {
  accounts = await ethers.provider.listAccounts()
  anOwner = accounts[0]
  if (accounts.length < 2) this.skip()
  walletOwner = createWalletOwner()
  guardian  = accounts[1]

  entryPoint = await deployEntryPoint(paymasterStake, globalUnstakeDelaySec)
  wallet = await new OperaSmartWallet__factory(ethers.provider.getSigner()).deploy(entryPoint.address, anOwner, [guardian])
  await ethersSigner.sendTransaction({from: accounts[0], to: wallet.address, value: parseEther('2')})
 })

 it('should set the supplied owner as owner', async () => {
  expect(await wallet.getOwnerCount()).to.equal(1);
  expect(await wallet.getOwner(0)).to.equal(anOwner);
 });
 it('should set the supplied guardians as guardians', async () => {
  expect(await wallet.getGuardianCount()).to.equal(1);
  expect(await wallet.getGuardian(0)).to.equal(guardian);
 });
 it('should add the supplied guardian as guardian', async () => {
  let guardian2 = accounts[2];
  const grantGuardian = await wallet.populateTransaction.grantGuardian(guardian2).then(tx => tx.data!)
  const callData = await wallet.populateTransaction.execFromEntryPoint(wallet.address, 0, grantGuardian).then(tx => tx.data!)

  const op = await fillAndSign({
   sender: wallet.address,
   callData: callData,
   callGas: 2e6,
   verificationGas: 3e6
  }, ethersSigner, entryPoint)
  await entryPoint.handleOps([op], accounts[0])

  expect(await wallet.getGuardianCount()).to.equal(2);
  expect(await wallet.getGuardian(1)).to.equal(guardian2);
 });
 it('should remove the supplied guardian as guardian', async () => {
  let guardian2 = accounts[2];
  const revokeGuardian = await wallet.populateTransaction.revokeGuardian(guardian2).then(tx => tx.data!)
  const callData = await wallet.populateTransaction.execFromEntryPoint(wallet.address, 0, revokeGuardian).then(tx => tx.data!)
  expect(await wallet.getGuardianCount()).to.equal(2);

  const op = await fillAndSign({
   sender: wallet.address,
   callData: callData,
   callGas: 2e6,
   verificationGas: 3e6
  }, ethersSigner, entryPoint)
  await entryPoint.handleOps([op], accounts[0])

  expect(await wallet.getGuardianCount()).to.equal(1);
  expect(await wallet.getGuardian(0)).to.equal(guardian);
 });
 it('should not be able to set owner as guardian', async () => {
  const grandGuardian = await wallet.populateTransaction.grantGuardian(anOwner).then(tx => tx.data!)
  const callData = await wallet.populateTransaction.execFromEntryPoint(wallet.address, 0, grandGuardian).then(tx => tx.data!)
  const numberOfGuardians =  await wallet.getGuardianCount()
  const op = await fillAndSign({
   sender: wallet.address,
   callData: callData,
   callGas: 2e6,
   verificationGas: 3e6
  }, ethersSigner, entryPoint)

  await entryPoint.handleOps([op], accounts[0]);
  expect(await wallet.getGuardianCount()).to.equal(numberOfGuardians);
 });
 it('should update owner to supplied owner', async () => {
  const owner2 = accounts[2];
  const transferOwner = await wallet.populateTransaction.transferOwner(owner2).then(tx => tx.data!)
  const callData = await wallet.populateTransaction.execFromEntryPoint(wallet.address, 0, transferOwner).then(tx => tx.data!)

  const op = await fillAndSign({
   sender: wallet.address,
   callData: callData,
   callGas: 2e6,
   verificationGas: 3e6
  }, ethersSigner, entryPoint)
  await entryPoint.handleOps([op], accounts[0])

  expect(await wallet.getOwner(0)).to.equal(owner2);
 });
});
