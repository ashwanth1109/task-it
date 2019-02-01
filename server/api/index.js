// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
const userApi = require("./user");
const taskApi = require("./task");
// ------------------------------------------------------------
// combine base routes for different apis under one constant api
// ------------------------------------------------------------
const api = server => {
    // ------------------------------------------------------------
    // Test route to check if express routes are working
    // ------------------------------------------------------------
    server.get("/api/test", (req, res) =>
        res.send("Express server is running correctly")
    );
    // ------------------------------------------------------------
    // base routes
    // ------------------------------------------------------------
    server.use("/api/user", userApi);
    server.use("/api/task", taskApi);
};
// ------------------------------------------------------------
// export api constant
// ------------------------------------------------------------
module.exports = api;
