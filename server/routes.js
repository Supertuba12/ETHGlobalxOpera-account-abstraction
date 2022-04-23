const router = require('express').Router();

const createWallet = require('./api/createWallet.js')
const findUser = require('./api/findUser.js')

router.post('/api/createWallet', createWallet.createWallet)
router.get('/api/findUser', findUser.findUser)

module.exports = router
