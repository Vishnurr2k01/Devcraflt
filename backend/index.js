const express = require('express');
const app = express();
const ConnectDB = require('./db/connect');
require('dotenv').config();
const AuthRouter = require('./routers/Auth');
const ExpenseRouter = require('./routers/Expense');




const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/v1/test', async (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});

app.use('/api/v1/auth', AuthRouter);
app.use('/api/v1/expenses', ExpenseRouter);

const start = async () => {
    try {
        await ConnectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
    }
    start()
