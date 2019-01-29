// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import sendRequest from "./sendRequest";
// ------------------------------------------------------------
// set base path
// ------------------------------------------------------------
const BASE_PATH = "/api/user";
// ------------------------------------------------------------
// loginUser api method
// ------------------------------------------------------------
export const loginUser = (username, password) => {
    const { secret } = process.env;
    console.log(process.env);
    return sendRequest(`${BASE_PATH}/login`, {
        body: JSON.stringify({ username, password, secret })
    });
};
