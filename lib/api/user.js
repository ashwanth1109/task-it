// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import sendRequest from "./sendRequest"; // sendRequest to make post request
import getConfig from "next/config"; // getConfig to get secret from env variable
// ------------------------------------------------------------
// get public runtime config
// ------------------------------------------------------------
const { publicRuntimeConfig } = getConfig(); // get runtime config to access env variables
const { secret } = publicRuntimeConfig; // get secret from env variable
// ------------------------------------------------------------
// set base path
// ------------------------------------------------------------
const BASE_PATH = "/api/user";
// ------------------------------------------------------------
// loginUser api method => username, password
// ------------------------------------------------------------
export const loginUser = (username, password) => {
    return sendRequest(`${BASE_PATH}/login`, {
        body: JSON.stringify({ username, password, secret })
    });
};
// ------------------------------------------------------------
// regiserUser api method => username, password, name
// ------------------------------------------------------------
export const registerUser = (username, password, name) => {
    return sendRequest(`${BASE_PATH}/register`, {
        body: JSON.stringify({ username, password, name, secret })
    });
};
