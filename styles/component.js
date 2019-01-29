// ------------------------------------------------------------
// import commonly used styles
// ------------------------------------------------------------
import { common, font } from "./style";
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
        margin: "50px 0",
        ...font.Lato
    },
    button: {
        margin: "20px auto"
    },
    signUp: {
        width: "100%",
        ...common.fCenter,
        color: color.blue,
        marginBottom: "20px"
    }
};
// ------------------------------------------------------------
// card component
// ------------------------------------------------------------
export const card = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    boxShadow: "0 1px 3px rgba(50,50,50,0.08)",
    borderRadius: "4px"
};
// ------------------------------------------------------------
// labelInput component
// ------------------------------------------------------------
export const labelInput = {
    container: {
        ...common.row,
        borderBottom: `1px solid ${color.lightGray}`
    },
    label: {
        width: "60px",
        height: "60px",
        ...common.fCenter
    },
    icon: {
        height: "30px"
    },
    input: {
        width: "300px",
        height: "60px",
        border: "0px",
        fontSize: "16px",
        lineHeight: "15px",
        color: "#666"
    }
};
// ------------------------------------------------------------
// button component
// ------------------------------------------------------------
export const button = {
    width: "320px",
    height: "40px",
    ...common.fCenter,
    ...font.white,
    borderRadius: "3px",
    cursor: "pointer",
    transition: "0.3s ease-in-out background-color"
};
