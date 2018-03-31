var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (!req.headers.token) {
        res.json(
            {
                success: false,
                msg: "Please provide auth details"
            }
        )
    }//end if

    else {
        jwt.verify(req.headers.token, req.app.get('secret'), (err, data) => {
            if (err) {
                res.json(

                    {
                        success: false,
                        msg: "Token NOT valid"
                    }
                )

            }//end of if err
            else {
                req.decoded = data;
                next();
            }
        }//end of anoy method
        );//end of verify
    }//end of else
}