// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { addTask as s } from "../styles/component"; // component styles
import color from "../styles/color"; // color palette
import withRedux from "../lib/redux/withRedux"; // Redux HOC
import { addTaskToUser } from "../lib/api/task"; // async api method
import moment from "moment"; // moment js for parsing dates
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import LogoIcon from "./LogoIcon";
import FieldOrInput from "./FieldOrInput";
// ------------------------------------------------------------
// AddTask component
// ------------------------------------------------------------
class AddTask extends React.Component {
    // ------------------------------------------------------------
    // component state
    // isTextField => toggles between text field and text input
    // textValue => track text value that is entered into input
    // ------------------------------------------------------------
    state = {
        isTextField: true,
        textValue: ""
    };
    // ------------------------------------------------------------
    // async method to add task to tasks array in redux store and db
    // could instead use thunk or saga as well
    // ------------------------------------------------------------
    addTask = async () => {
        // ------------------------------------------------------------
        // extracting props and state
        // ------------------------------------------------------------
        const { user, updateState } = this.props;
        const { textValue } = this.state;
        // ------------------------------------------------------------
        // check if user has entered something into the input
        // ------------------------------------------------------------
        if (textValue !== "") {
            // ------------------------------------------------------------
            // get current date in string format using moment js
            // ------------------------------------------------------------
            const date = moment().format("LL");
            // ------------------------------------------------------------
            // push new task into user object (temporary) => not the actual task
            // ------------------------------------------------------------
            user.tasks.push({
                description: textValue,
                date,
                checked: false
            });
            // ------------------------------------------------------------
            // update state in redux store first => this is better for user experience
            // downside to this approach is db updation fails we need to reflect error
            // ------------------------------------------------------------
            updateState("USER", Object.assign({}, user));
            // ------------------------------------------------------------
            // reset text value in add task component as value has been extracted
            // ------------------------------------------------------------
            this.setState({ textValue: "" });
            try {
                // ------------------------------------------------------------
                // make api request to add task to user in db
                // ------------------------------------------------------------
                const task = await addTaskToUser(user, textValue, date);
                // ------------------------------------------------------------
                // once task has been added to db, we get task object with object id etc.
                // ------------------------------------------------------------
                user.tasks.pop(); // so pop temporary task out
                user.tasks.push(task); // push new task object in
                // ------------------------------------------------------------
                // update this change in user to redux state
                // ------------------------------------------------------------
                updateState("USER", Object.assign({}, user));
            } catch (err) {
                console.log(err);
            }
        }
    };
    // ------------------------------------------------------------
    // method to switch to input
    // ------------------------------------------------------------
    switchToInput = () => this.setState({ isTextField: false });
    // ------------------------------------------------------------
    // method to switch to text
    // ------------------------------------------------------------
    switchToText = text =>
        this.setState({ isTextField: true, textValue: text });
    // ------------------------------------------------------------
    // render method
    // ------------------------------------------------------------
    render() {
        // ------------------------------------------------------------
        // extract state variables
        // ------------------------------------------------------------
        const { isTextField, textValue } = this.state;
        // ------------------------------------------------------------
        // construct field or input props
        // ------------------------------------------------------------
        const fieldOrInputProps = {
            isTextField,
            textValue,
            switchToInput: this.switchToInput,
            switchToText: this.switchToText
        };
        // ------------------------------------------------------------
        // return component
        // ------------------------------------------------------------
        return (
            <div style={s.container}>
                {/* ADD A TASK DIV */}
                <div style={s.taskHeader}>
                    <LogoIcon
                        background={color.royalBlue}
                        check={color.white}
                        outline={color.royalBlue}
                    />
                    <FieldOrInput {...fieldOrInputProps} />
                </div>
                {/* ADD BUTTON */}
                <div style={s.add} onClick={this.addTask} className="btn2">
                    <img
                        src="/static/add.svg"
                        style={s.addIcon}
                        alt="Add Task"
                    />
                </div>
            </div>
        );
    }
}
// ------------------------------------------------------------
// export AddTask withRedux => mapState and mapDispatch
// ------------------------------------------------------------
export default withRedux(AddTask, true, true);
