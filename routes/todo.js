var dbtodo = require('../models/task');

exports.createTask = (req, res) => {

    if (!req.body.taskName) {
        res.json({
            success: false,
            msg: "Please enter task"
        })
    }//end if
    else {
        var newTask = new dbtodo(
            {
                email: req.decoded.email,
                taskName: req.body.taskName,
            }

        )//end of dbtodo
        newTask.save((err, data) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error in DB"
                })
            }
            else
            {
                res.json({
                    success: true,
                    msg: "New task created"
                })
            }
        })//end of Anony method
    }//end of else
}//end of Anoy method


exports.getToDoList = (req, res) => {
    res.json({
        success: true,
    })
}//end of Anoy method