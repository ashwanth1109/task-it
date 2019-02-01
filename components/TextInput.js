// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import withRedux from "../lib/redux/withRedux";
import { textInputOrField as s } from "../styles/component";
// ------------------------------------------------------------
// TextInput component
// ------------------------------------------------------------
class TextInput extends React.Component {
    render({ description } = this.props) {
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
// export TextInput
// ------------------------------------------------------------
export default withRedux(TextInput, false, true);
