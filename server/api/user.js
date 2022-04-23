const {Users} = require('../data/mongo');
const walletUtils = require("../utils/walletUtils")

exports.addUser = async function (req, res) {
 res.json(await addUser({username: req.body.username, password: req.body.password}));
}

exports.addGuardian = async function (req, res) {
 res.json(await addGuardian({username: req.body.username, guardians: req.body.guardians}));
}

exports.findUser = async function (req, res) {
 const userFromDb = await findUser({username: req.body.username});
 const result = []
 await userFromDb.forEach(function (item) {
  result.push(item);
 })
 res.json(result);
}

async function addUser(userInfo) {
 const walletInfo = walletUtils.generateWallet()
 userInfo.address = walletInfo.address;
 userInfo.secret = walletInfo.secret;
 return await Users.addUser(userInfo);
}

async function addGuardian(userInfo) {
 const guardianAddresses = []
 await userInfo.guardians.forEach(guardianUserName => {
  Users.findUser(guardianUserName).forEach(item => {
   guardianAddresses.push(item);
  })
 })
 userInfo.guardians = guardianAddresses;
 return await Users.addGuardian(userInfo);
}

async function findUser(userInfo) {
 return await Users.findUser(userInfo);
}
