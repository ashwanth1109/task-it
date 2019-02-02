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
// prop type validation
// ------------------------------------------------------------
FieldOrInput.propTypes = {
    isTextField: PropTypes.bool.isRequired,
    textValue: PropTypes.string.isRequired,
    switchToInput: PropTypes.func.isRequired,
    switchToText: PropTypes.func.isRequired,
    checked: PropTypes.bool
};
// ------------------------------------------------------------
// export FieldOrInput
// ------------------------------------------------------------
export default React.memo(FieldOrInput);
