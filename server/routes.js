const router = require('express').Router();

const user = require('./api/user.js')

router.post('/api/addUser', user.addUser)
router.post('/api/addGuardian', user.addGuardian)
router.get('/api/findUser', user.findUser)


module.exports = router
