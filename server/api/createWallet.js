exports.createWallet = function(req, res) {
 const user = req.body.user;
 console.log('create wallet:::::', user);
 res.json("user added");
}
