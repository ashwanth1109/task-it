// ------------------------------------------------------------
// dotenv config to use process environment variables
// ------------------------------------------------------------
require("dotenv").config();

// ------------------------------------------------------------
// next config options
// ------------------------------------------------------------
module.exports = {
    publicRuntimeConfig: {
        // Will be available on both server and client
        secret: process.env.SECRET // Pass through env variables
    }
};
