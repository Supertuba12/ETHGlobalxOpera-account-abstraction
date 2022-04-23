const router = require('express').Router();

const addUser = require('./api/addUser.js')
const findUser = require('./api/findUser.js')

router.post('/api/addUser', addUser.addUser)
router.get('/api/findUser', findUser.findUser)

module.exports = router
