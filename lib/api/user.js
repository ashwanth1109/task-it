// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import sendRequest from "./sendRequest";
import getConfig from "next/config";
// ------------------------------------------------------------
// get public runtime config
// ------------------------------------------------------------
const { publicRuntimeConfig } = getConfig();
// ------------------------------------------------------------
// set base path
// ------------------------------------------------------------
const BASE_PATH = "/api/user";
const { secret } = publicRuntimeConfig;
// ------------------------------------------------------------
// loginUser api method
// ------------------------------------------------------------
export const loginUser = (username, password) => {
    return sendRequest(`${BASE_PATH}/login`, {
        body: JSON.stringify({ username, password, secret })
    });
};
