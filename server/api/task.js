const express = require("express");
const User = require("../models/User");
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
    next();
});
// ------------------------------------------------------------
// router POST /api/task/add
// ------------------------------------------------------------
router.post("/add", async (req, res) => {
    try {
        const task = await User.addTaskToUser(req.body); // user, description, date
        console.log(`=================PRINTING IN ROUTE`);
        console.log(task);
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
        const user = await User.deleteTask(req.body); // req.body => user, id
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});
// export router
// ------------------------------------------------------------
module.exports = router;
