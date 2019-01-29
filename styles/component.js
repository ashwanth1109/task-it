// ------------------------------------------------------------
// import commonly used styles
// ------------------------------------------------------------
import { common } from "./style";
import color from "./color";
// ------------------------------------------------------------
// index page
// ------------------------------------------------------------
export const index = {
    container: {
        ...common.fScreen,
        ...common.col,
        ...common.center,
        backgroundColor: color.cream
    },
    cardContainer: {
        margin: "15px 0",
        padding: "20px"
    }
};
// ------------------------------------------------------------
// card component
// ------------------------------------------------------------
export const card = {
    container: {
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        boxShadow: "0 1px 3px rgba(50,50,50,0.08)",
        borderRadius: "4px"
    }
};
