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
const BASE_PATH = "/api/task";
// ------------------------------------------------------------
// addTask api method => user, description, date
// ------------------------------------------------------------
export const addTaskToUser = (user, description, date) => {
    return sendRequest(`${BASE_PATH}/add`, {
        body: JSON.stringify({ user, description, date, secret })
    });
};
// ------------------------------------------------------------
// deleteTask api method => user, taskId
// ------------------------------------------------------------
export const deleteTask = (user, taskId) => {
    return sendRequest(`${BASE_PATH}/delete`, {
        body: JSON.stringify({ user, taskId, secret })
    });
};
// ------------------------------------------------------------
// updateTaskDescAndDate api method => taskId, description, date
// ------------------------------------------------------------
export const updateTaskDescAndDate = (taskId, description, date) => {
    return sendRequest(`${BASE_PATH}/updateTaskDescAndDate`, {
        body: JSON.stringify({ taskId, description, date, secret })
    });
};
// ------------------------------------------------------------
// updateTaskCheckState api method => taskId, checked
// ------------------------------------------------------------
export const updateTaskCheckState = (taskId, checked) => {
    return sendRequest(`${BASE_PATH}/updateTaskCheckState`, {
        body: JSON.stringify({ taskId, checked, secret })
    });
};
