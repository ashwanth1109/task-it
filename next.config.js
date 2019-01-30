// ------------------------------------------------------------
// webpack config to use process environment variables
// ------------------------------------------------------------
const webpack = require("webpack");
const dotenv = require("dotenv");
// console.log(process.env);

// ------------------------------------------------------------
// webpack config options
// ------------------------------------------------------------
module.exports = () => {
    const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((acc, curr) => {
        acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
        return acc;
    }, {});
    console.log(envKeys);
    return {
        plugins: [new webpack.DefinePlugin(envKeys)]
    };
};
