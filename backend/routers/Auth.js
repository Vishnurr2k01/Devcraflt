const router = require('express').Router();
const { registerUser } = require('../controllers/Auth');

router.route('/register').post(registerUser);

module.exports = router;