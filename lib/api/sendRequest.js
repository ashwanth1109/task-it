// ------------------------------------------------------------
// import dependencies - isomorphic fetch for fetching data both client and server side
// ------------------------------------------------------------
import "isomorphic-fetch";
// ------------------------------------------------------------
// get ROOT_URL for fetch call
// ------------------------------------------------------------
// const ROOT_URL = process.env.ROOT_URL;
// ------------------------------------------------------------
// sendRequest function => for reusability and readability
// ------------------------------------------------------------
const sendRequest = async (path, options = {}) => {
    // ------------------------------------------------------------
    // create headers object using object assign
    // ------------------------------------------------------------
    const headers = Object.assign({}, options.headers || {}, {
        "Content-type": "application/json; charset=UTF-8"
    });
    // ------------------------------------------------------------
    // fetch response in route specified by passed in parameter - path
    // ------------------------------------------------------------
    const response = await fetch(
        path,
        // ------------------------------------------------------------
        // construct fetch options with method type, headers and other options passed into method
        // ------------------------------------------------------------
        Object.assign({ method: "POST", credentials: "include" }, options, {
            headers
        })
    );
    // ------------------------------------------------------------
    // return data in json format
    // ------------------------------------------------------------
    const data = await response.json();
    // ------------------------------------------------------------
    // if error response from api, then throw error
    // ------------------------------------------------------------
    if (data.error) {
        throw new Error(data.error);
    }
    // ------------------------------------------------------------
    // else return the data
    // ------------------------------------------------------------
    return data;
};
// ------------------------------------------------------------
// export sendRequest
// ------------------------------------------------------------
export default sendRequest;
