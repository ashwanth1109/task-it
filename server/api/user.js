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
// router POST /api/user/register
// ------------------------------------------------------------
router.post("/register", async (req, res) => {
    try {
        const registerStatus = await User.register(req.body); // req.body => username, password, name
        res.json(registerStatus);
    } catch (err) {
        res.json(err);
    }
});
// ------------------------------------------------------------
// router POST /api/user/login
// ------------------------------------------------------------
router.post("/login", async (req, res) => {
    try {
        const loginStatus = await User.login(req.body); // req.body => username, password
        res.json(loginStatus);
    } catch (err) {
        res.json(err);
    }
});
// ------------------------------------------------------------
// export router
// ------------------------------------------------------------
module.exports = router;
