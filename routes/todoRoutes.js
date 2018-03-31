// var express = require('express');
// var app = express.Router();//this will initilze routing func only

// var user = require('../models/user');

// app.get('/',(req,res)=>
// {
//     res.json(
//         {
//     issucess : true
//         }
//     );
// }
// )

// app.get('/InnerMethod',(req,res)=>
// {
//     res.json(
//         {
//     issucess : true
//         }
//     );
// }
// )

// module.exports = app;



var express = require('express');
var router = express.Router();//this will initilze routing func only
var tokenverify = require('./jwtVerify');//this is used to verify the token using middle ware
var middleware = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all details"
        })
    }//END of if

    else
    {
        next();
    }
}

var registrationLogin = require('./registrationLogin');

router.post('/register', middleware, registrationLogin.registration);

router.post('/loginCheck', middleware, registrationLogin.loginCheck);



var todo = require("./todo");

router.post('/createToDoTask',tokenverify,todo.createTask);

router.get('/getTaskList',tokenverify,todo.getToDoList);


module.exports = router;