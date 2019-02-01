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
const BASE_PATH = "/api/task";
const { secret } = publicRuntimeConfig;
// ------------------------------------------------------------
// addTask api method
// ------------------------------------------------------------
export const addTaskToUser = (user, description) => {
    console.log(user, description);
    return sendRequest(`${BASE_PATH}/add`, {
        body: JSON.stringify({ user, description, secret })
    });
};
