const User = require('../modals/User');

const registerUser = async (req, res, next) => {
    const { name, email, phone, password } = req.body;

    try {
        const user = await User.create({
            name,
            email,
            phone,
            password
        });

        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

const LoginUser = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: 'Please provide email and password'
        });
    }

    try {
        User.findOne({ email }).then(user => {
            if (!user) {
                return res.status(404).json({
                    success: false,
                    error: 'Invalid Credentials'
                });
            }

            if (password === user.password) {
                return res.status(200).json({
                    success: true,
                    data: user
                });
            } else {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid Credentials'
                });
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}



module.exports = {registerUser, LoginUser}