// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import withRedux from "../lib/redux/withRedux";
import { textInputOrField as s } from "../styles/component";
// ------------------------------------------------------------
// TextInput component
// ------------------------------------------------------------
class TextInput extends React.Component {
    updateValueAndBlur = () => {
        this.props.updateState("ADD_TODO", this.refs.addToDo.value);
        this.props.onBlur();
        setTimeout(() => {
            this.props.updateState("ADD_TODO", "");
        }, 500);
    };
    render({ description } = this.props) {
        return (
            <input
                style={{ ...s.task, ...s.incompleteTask, ...s.textInput }}
                type="text"
                onBlur={this.updateValueAndBlur}
                ref="addToDo"
                defaultValue={description}
                autoFocus
            />
        );
    }
}
// ------------------------------------------------------------
// export TextInput
// ------------------------------------------------------------
export default withRedux(TextInput, false, true);
