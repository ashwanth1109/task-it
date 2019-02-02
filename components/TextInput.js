// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { textInputOrField as s } from "../styles/component"; // component styles
import withRedux from "../lib/redux/withRedux"; // Redux HOC
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// TextInput component
// ------------------------------------------------------------
class TextInput extends React.Component {
    render({ description } = this.props) {
        // ------------------------------------------------------------
        // display the task description in input for user to modify
        // ------------------------------------------------------------
        return (
            <input
                style={{ ...s.task, ...s.incompleteTask, ...s.textInput }}
                type="text"
                onBlur={() => this.props.onBlur(this.refs.newToDo.value)}
                ref="newToDo"
                defaultValue={description}
                autoFocus
            />
        );
    }
}
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
TextInput.propTypes = {
    description: PropTypes.string.isRequired
};
// ------------------------------------------------------------
// export TextInput withRedux => mapDispatch only
// ------------------------------------------------------------
export default withRedux(TextInput, false, true);
