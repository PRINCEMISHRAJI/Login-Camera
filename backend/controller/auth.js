const userModel = require('../models/UserModels');
const jwt = require("jsonwebtoken");
const { createSecretToken } = require('../secrets');



module.exports.login = async (req, res) => {
    try {
        let data = req.body;
        if (data.email) {

            const user = await userModel.findOne({ email: data.email });
            if (user) {
                if (user.email == data.email) {
                    let uid = user['_id']; //uid
                    let token = createSecretToken(uid);
                    res.cookie('token', token, { withCredentials: true, httpOnly: false });
                    return res.status(201).json({
                        message: "User has logged in",
                        userDetails: data
                    })
                    // next();
                }
                
            }
            else {
                let dataObj = req.body;
                let user = await userModel.create(dataObj);
                const token = createSecretToken(user._id);
                res.cookie("token", token, {
                    withCredentials: true,
                    httpOnly: false,
                });
                res
                    .status(201)
                    .json({ message: "User signed in successfully", success: true, user });
                // next();
                console.log("Get signup called");
                console.log("User has Signed up");
                // next();
                // console.log("backend", user);
            }
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}