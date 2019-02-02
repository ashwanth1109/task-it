// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
const express = require("express");
const User = require("../models/User");
const Task = require("../models/Task");
// ------------------------------------------------------------
// get express router
// ------------------------------------------------------------
const router = express.Router();
// ------------------------------------------------------------
// router permission gateway
// ------------------------------------------------------------
router.use((req, res, next) => {
    if (req.body.secret !== process.env.SECRET) {
        res.status(401).json({
            error: "Unauthorized Access"
        });
        return;
    }
    // ------------------------------------------------------------
    // if api access is authorized, expose the routes
    // ------------------------------------------------------------
    next();
});
// ------------------------------------------------------------
// router POST /api/task/add
// ------------------------------------------------------------
router.post("/add", async (req, res) => {
    try {
        // ------------------------------------------------------------
        // use USER static method to create and add task to db
        // also attaches taskId to tasks array of current user in db
        // ------------------------------------------------------------
        const task = await User.addTaskToUser(req.body); // user, description, date
        res.json(task);
    } catch (err) {
        res.json(err);
    }
});
// ------------------------------------------------------------
// router POST /api/task/delete
// ------------------------------------------------------------
router.post("/delete", async (req, res) => {
    try {
        // ------------------------------------------------------------
        // use USER static method to delete a task from db and remove it from array of user
        // ------------------------------------------------------------
        await User.deleteTask(req.body); // req.body => user, id
        res.json({});
    } catch (err) {
        res.json(err);
    }
});
// ------------------------------------------------------------
// router POST /api/task/updateTaskDescAndDate
// ------------------------------------------------------------
router.post("/updateTaskDescAndDate", async (req, res) => {
    try {
        // ------------------------------------------------------------
        // use TASK static method to update the description and date of a specific task in db
        // ------------------------------------------------------------
        await Task.updateTaskDescAndDate(req.body); // req.body => taskId, description, date
        res.json({});
    } catch (err) {
        res.json(err);
    }
});
// ------------------------------------------------------------
// router POST /api/task/updateTaskCheckState
// ------------------------------------------------------------
router.post("/updateTaskCheckState", async (req, res) => {
    try {
        // ------------------------------------------------------------
        // use TASK static method to update the checked state of a specific task in db
        // ------------------------------------------------------------
        await Task.updateTaskCheckState(req.body); // req.body => taskId, checked
        res.json({});
    } catch (err) {
        res.json(err);
    }
});
// ------------------------------------------------------------
// export router
// ------------------------------------------------------------
module.exports = router;
