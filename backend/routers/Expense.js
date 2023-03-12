const router = require('express').Router();
const { addExpense,getExpenses} = require('../controllers/Expenses');

router.route('/').get(getExpenses).post(addExpense);

module.exports = router;
