var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
email: {
    type:String,
    Required: 'Required to link task' //implicity mark as true as soon as text assign to required 
},

taskName: {
    type:String,
    Required: 'Kindly enter the name of teh task'
},

created_date: {
    type:Date,
    Required: 'Kindly provide created date',
    default: Date.now()
},


status: {
    type:String,
    Required: 'pending'
},

completed_date: {
    type:Date
},

updated_date: {
    type:Date
},


})


module.exports = mongoose.model('task',TaskSchema);