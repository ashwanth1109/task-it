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
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});
// ------------------------------------------------------------
// task class for api methods
// ------------------------------------------------------------
class TaskClass {
    // ------------------------------------------------------------
    // static method to create a new task
    // ------------------------------------------------------------
    static async addTask(description) {
        try {
            const task = await this.create({ description });
            console.log(task);
            return task;
        } catch (err) {
            console.log(err);
        }
    }
    // ------------------------------------------------------------
    // static method to fetch all tasks for user
    // ------------------------------------------------------------
    static async fetchTasks(taskIds) {
        try {
            return await this.find({ _id: { $in: taskIds } });
        } catch (err) {
            console.log(err);
        }
    }
}
// ------------------------------------------------------------
// load class properties into schema
// ------------------------------------------------------------
taskSchema.loadClass(TaskClass);
// ------------------------------------------------------------
// create task mongoose model and export it
// ------------------------------------------------------------
const Task = mongoose.model("tasks", taskSchema);
module.exports = Task;
