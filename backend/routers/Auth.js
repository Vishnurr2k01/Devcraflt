const router = require('express').Router();
const { registerUser ,LoginUser} = require('../controllers/Auth');

router.route('/auth').post(registerUser).get(LoginUser);

module.exports = router;