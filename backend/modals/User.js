const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        trim: true,
        maxlength: [50, 'Email cannot be more than 50 characters']
    },
    phone: {
        type: Number,
        required: [true, 'Please provide a phone number'],
        unique: true,
        trim: true,
        maxlength: [10, 'Phone number cannot be more than 10 characters']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [6, 'Password must be at least 6 characters']  
    }
});

module.exports = mongoose.model('User', userSchema);