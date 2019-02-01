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
// "FORM_REFS" reducer
// ------------------------------------------------------------
const formRefs = (state = {}, action) =>
    action.type === "FORM_REFS" ? action.payload : state;
// ------------------------------------------------------------
// "USER" reducer
// ------------------------------------------------------------
const user = (state = null, action) =>
    action.type === "USER" ? action.payload : state;
// ------------------------------------------------------------
// combineReducers & export
// ------------------------------------------------------------
export default combineReducers({
    formRefs,
    user
});
