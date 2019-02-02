// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import TextField from "./TextField";
import TextInput from "./TextInput";
// ------------------------------------------------------------
// Field Or Input stateless component
// ------------------------------------------------------------
const FieldOrInput = ({
    isTextField,
    textValue,
    switchToInput,
    switchToText,
    checked
}) => (
    <React.Fragment>
        {isTextField ? (
            <TextField
                checked={checked}
                description={textValue || "Add a task"}
                onClick={switchToInput}
            />
        ) : (
            <TextInput
                onBlur={text => switchToText(text)}
                description={textValue}
            />
        )}
    </React.Fragment>
);
// ------------------------------------------------------------
// export FieldOrInput
// ------------------------------------------------------------
export default FieldOrInput;
