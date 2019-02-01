// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
const mongoose = require("mongoose");
const { Schema } = mongoose;
// ------------------------------------------------------------
// task schema
// ------------------------------------------------------------
const taskSchema = Schema({
    checked: {
        type: Boolean,
        required: true,
        default: false
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// ------------------------------------------------------------
// create task mongoose model and export it
// ------------------------------------------------------------
const Task = mongoose.model("Tasks", taskSchema);
module.exports = Task;
