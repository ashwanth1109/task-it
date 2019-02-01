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
        backgroundColor: color.royalBlue
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
        color: color.royalBlue,
        marginBottom: "20px"
    }
};
// ------------------------------------------------------------
// dashboard page
// ------------------------------------------------------------
export const dashboard = {
    container: {
        ...common.minHeightScreen,
        backgroundColor: color.royalBlue,
        paddingTop: "50px"
    },
    cardContainer: {
        ...common.container,
        padding: "20px"
    },
    spacer: {
        height: "50px"
    },
    header: {
        ...common.row,
        ...font.Lato
    },
    title: {
        flex: 1,
        fontSize: "30px",
        color: color.royalBlue
    },
    date: {
        fontSize: "24px",
        color: color.royalBlue,
        ...common.fCenter
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
// ------------------------------------------------------------
// addTask component
// ------------------------------------------------------------
export const addTask = {
    container: {
        width: "100%",
        height: "100px",
        marginTop: "20px",
        ...common.col,
        position: "relative"
    },
    taskHeader: {
        width: "100%",
        height: "60px",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
        ...common.row,
        ...common.alignCenter
    },
    logo: {
        width: "50px",
        height: "50px",
        ...common.fCenter
    },
    add: {
        position: "absolute",
        width: "80px",
        height: "80px",
        borderRadius: "40px",
        ...common.fCenter,
        right: "20px",
        top: "10px",
        cursor: "pointer",
        transition: "0.3s ease-in-out background-color"
    },
    addIcon: {
        width: "20px"
    }
};
// ------------------------------------------------------------
// task component
// ------------------------------------------------------------
export const task = {
    container: {
        width: "100%",
        height: "60px",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
        ...common.row,
        ...common.alignCenter
    },
    logo: {
        width: "50px",
        height: "50px",
        ...common.fCenter
    },
    dateIncomplete: {
        ...font.royalLato
    },
    dateComplete: {
        ...font.lightGrayLato
    },
    delete: {
        height: "30px",
        marginLeft: "20px",
        cursor: "pointer"
    }
};
// ------------------------------------------------------------
// taskList component
// ------------------------------------------------------------
export const taskList = {
    container: {
        ...common.col
    }
};
// ------------------------------------------------------------
// textField or textInput component
// ------------------------------------------------------------
export const textInputOrField = {
    task: {
        fontSize: "20px",
        height: "25px",
        flex: 1,
        overflow: "hidden",
        cursor: "pointer"
    },
    incompleteTask: {
        ...font.royalLato
    },
    completeTask: {
        ...font.lightGrayLato,
        textDecoration: "line-through"
    },
    textInput: {
        border: "0px"
    }
};
