const router = require('express').Router();
const { registerUser ,LoginUser} = require('../controllers/Auth');

router.route('/').post(registerUser).get(LoginUser);

module.exports = router;