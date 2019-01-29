// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
const userApi = require("./user");
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
};
// ------------------------------------------------------------
// export api constant
// ------------------------------------------------------------
module.exports = api;