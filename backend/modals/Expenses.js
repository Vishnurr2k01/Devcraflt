const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
    category :{
        type: String,
        required: [true, 'Please provide a category']
    },
    amount :{
        type: Number,
        required: [true, 'Please provide an amount']
    },
    description :{
        type: String,
        required: [true, 'Please provide a description']
    },
    date :{
        type: Date,
        required: [true, 'Please provide a date']
    },
    email :{
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    }
});

module.exports = mongoose.model('Expense', expenseSchema);