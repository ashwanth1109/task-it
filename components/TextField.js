// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { textInputOrField as s } from "../styles/component"; // component styles
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// TextField stateless component
// ------------------------------------------------------------
const TextField = ({ checked, description, onClick }) => {
    // ------------------------------------------------------------
    // display the task description
    // ------------------------------------------------------------
    return (
        <div
            style={{
                ...s.task,
                ...(checked ? s.completeTask : s.incompleteTask)
            }}
            onClick={!checked ? onClick : null}
        >
            {description}
        </div>
    );
};
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
TextField.propTypes = {
    checked: PropTypes.bool,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
// ------------------------------------------------------------
// default props
// ------------------------------------------------------------
TextField.defaultProps = {
    description: "",
    onClick: () => null
};
// ------------------------------------------------------------
// export TextField
// ------------------------------------------------------------
export default React.memo(TextField);
