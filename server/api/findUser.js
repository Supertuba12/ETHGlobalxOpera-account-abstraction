const users = ["Maggan", "Hampe"];

exports.findUser = function(req, res) {
 console.log('api/findUser called!')
 res.json(users);
}
