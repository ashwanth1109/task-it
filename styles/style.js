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
    justifyCenter: {
        justifyContent: "center"
    },
    alignCenter: {
        alignItems: "center"
    },
    fCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mAuto: {
        margin: "0 auto"
    },
    minHeightScreen: {
        width: "100vw",
        minHeight: "100vh"
    },
    container: {
        maxWidth: "1000px",
        width: "calc(100% - 100px)",
        margin: "0 auto"
    }
};

export const font = {
    Lato: {
        fontFamily: "Lato, sans-serif"
    },
    white: {
        color: color.white
    },
    royalLato: {
        fontFamily: "Lato, sans-serif",
        color: color.royalBlue
    },
    lightGrayLato: {
        fontFamily: "Lato, sans-serif",
        color: color.lightGray
    }
};
