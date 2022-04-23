const ethers = require('ethers');
const crypto = require('crypto');

exports.generateWallet = function () {
 const id = crypto.randomBytes(32).toString('hex');
 const privateKey = "0x" + id;

 const wallet = new ethers.Wallet(privateKey);
 return {address: wallet.address, secret: privateKey}
}
