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
    static async addTask(description, date) {
        try {
            return await this.create({ description, date }); // create and return task
        } catch (err) {
            console.log(err);
        }
    }
    // ------------------------------------------------------------
    // static method to fetch all tasks for user
    // ------------------------------------------------------------
    static async fetchTasks(taskIds) {
        try {
            return await this.find({ _id: { $in: taskIds } }); // find and return all tasks
        } catch (err) {
            console.log(err);
        }
    }
    // ------------------------------------------------------------
    // static method to delete task by id
    // ------------------------------------------------------------
    static async deleteTask(taskId) {
        try {
            await this.findByIdAndRemove({ _id: taskId }); // find and delete task
        } catch (err) {
            console.log(err);
        }
    }
    // ------------------------------------------------------------
    // static method to update description and date
    // ------------------------------------------------------------
    static async updateTaskDescAndDate({ taskId, description, date }) {
        try {
            return await this.findByIdAndUpdate(taskId, { description, date });
        } catch (err) {
            console.log(err);
        }
    }
    // ------------------------------------------------------------
    // static method to update check state
    // ------------------------------------------------------------
    static async updateTaskCheckState({ taskId, checked }) {
        try {
            return await this.findByIdAndUpdate(taskId, { checked });
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
