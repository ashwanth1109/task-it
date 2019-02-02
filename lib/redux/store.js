// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { combineReducers } from "redux";
// ------------------------------------------------------------
// "TEST" reducer
// ------------------------------------------------------------
// const test = (state = "Redux works", action) =>
//     action.type === "TEST" ? action.payload : state;
// ------------------------------------------------------------
// "LOGIN_REFS" reducer
// ------------------------------------------------------------
const loginRefs = (state = {}, action) =>
    action.type === "LOGIN_REFS" ? action.payload : state;
// ------------------------------------------------------------
// "REGISTER_REFS" reducer
// ------------------------------------------------------------
const registerRefs = (state = {}, action) =>
    action.type === "REGISTER_REFS" ? action.payload : state;
// ------------------------------------------------------------
// "USER" reducer
// ------------------------------------------------------------
const user = (state = null, action) =>
    action.type === "USER" ? action.payload : state;
// ------------------------------------------------------------
// combineReducers & export
// ------------------------------------------------------------
export default combineReducers({
    loginRefs,
    registerRefs,
    user
});
