var dbLogin = require('../models/user')
var jwt = require('jsonwebtoken');

exports.registration = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    }//end of if
    else {
        dbLogin.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Databse error"
                })
            } else if (!loginData || loginData == null) {
                var newPerson = new dbLogin({
                    email: req.body.email,
                    password: req.body.password
                })
                newPerson.save((err, savedData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Error while saving data"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "New registration done"
                        })
                    }
                })
            } else {
                res.json({
                    success: false,
                    msg: "You have already registered. Please sign in. "
                })
            }
        })//END of Fine ONE
    }//end of else
}//end of any method



exports.loginCheck = (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    }//If END
    else {
        dbLogin.findOne({ email: req.body.email, password: req.body.password }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Databse error"
                })
            }//END of ERR If

            else if (!loginData || loginData == null) {
                res.json({
                    success: false,
                    msg: "Invalid crdenatils"
                })
            }//End If else
            else {
                var tokenData = {
                    email: loginData.email
                }

                var token = jwt.sign(tokenData, req.app.get('secret'));
                //here secret is a variable which will set in server.js via app.set('secret',config.secret);
                res.json({
                    success: true,
                    msg: "Login Sucessful",
                    tokenVal: token
                })
            }
        })//END of Anonymus method and find one
    }//END of else
}//END