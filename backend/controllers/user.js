const { validateEmail } = require("../helpers/validator");

exports.signup = (req, res) => {
    try {
        const { name, email, mobile, password } = req.body;
        if (!name || !email || !mobile || !password) {
            res.status(400).json({
                message: "Invalid"
            })
        } else {
            const EmailChecker = validateEmail(req.body.email);
            
        }
    } catch (error) {
        res.send(error);
    }
}


