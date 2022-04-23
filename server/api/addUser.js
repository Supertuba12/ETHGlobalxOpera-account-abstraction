const {Users} = require('../data/mongo');

exports.addUser = async function (req, res) {
 await addUser({username: req.body.username, password: req.body.password});
 res.json("user added");
}

async function addUser(userInfo) {
 return await Users.addUser(userInfo);
}
