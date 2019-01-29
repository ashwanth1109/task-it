import color from "./color";

export const common = {
    fScreen: {
        width: "100vw",
        height: "100vh"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    col: {
        display: "flex",
        flexDirection: "column"
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    },
    fCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mAuto: {
        margin: "0 auto"
    }
};

export const font = {
    Lato: {
        fontFamily: "Lato, sans-serif"
    },
    white: {
        color: color.white
    }
};
