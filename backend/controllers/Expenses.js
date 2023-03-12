const Expense = require('../modals/Expenses');


const getExpenses = async (req, res, next) => {
    try {
        const expenses = await Expense.find({ email: req.body.email });
        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
}

const addExpense = async (req, res, next) => {
    try {
        const {category,amount,description,email} = req.body;
        const date = new Date();
        
        const expense = await Expense.create({
            category,
            amount,
            description,
            email,
            date
        });
        res.status(201).json({
            success: true,
            data: expense
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            res.status(500).json({ success: false, error: 'Server Error' });
        }
    }
}

module.exports = {
    getExpenses,
    addExpense
}
