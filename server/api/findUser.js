const {Users} = require('../data/mongo');

exports.findUser = async function (req, res) {
 const user = req.body.username;
 const userFromDb = await findUser({userName: user});
 const result = []
 await userFromDb.forEach(function (item) {
  result.push(item);
 })
 res.json(result);
}

async function findUser(userInfo) {
 return await Users.findUser(userInfo);
}
