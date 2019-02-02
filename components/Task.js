// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { task as s } from "../styles/component"; // component styles
import color from "../styles/color"; // color palette
import PropTypes from "prop-types"; // prop type validation
import withRedux from "../lib/redux/withRedux"; // Redux HOC
import moment from "moment"; // moment js
import {
    deleteTask,
    updateTaskDescAndDate,
    updateTaskCheckState
} from "../lib/api/task"; // api methods to delete and update tasks
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import LogoIcon from "./LogoIcon";
import FieldOrInput from "./FieldOrInput";
// ------------------------------------------------------------
// Task component
// ------------------------------------------------------------
class Task extends React.Component {
    // ------------------------------------------------------------
    // state: isTextField => to track if task should display text field or input
    // ------------------------------------------------------------
    state = {
        isTextField: true
    };
    // ------------------------------------------------------------
    // method to switch to input
    // ------------------------------------------------------------
    switchToInput = () => this.setState({ isTextField: false });
    // ------------------------------------------------------------
    // method to switch to text field and update task in db and redux state
    // ------------------------------------------------------------
    switchToText = async text => {
        // ------------------------------------------------------------
        // switch to text field
        // ------------------------------------------------------------
        this.setState({ isTextField: true });
        // ------------------------------------------------------------
        // check if text has been modified
        // ------------------------------------------------------------
        if (text !== this.props.description) {
            // ------------------------------------------------------------
            // extract props and tasks from user
            // ------------------------------------------------------------
            const { user, id, updateState } = this.props;
            const { tasks } = user;
            // ------------------------------------------------------------
            // get current date to keep track of when the task was last updated
            // ------------------------------------------------------------
            const date = moment().format("LL");
            // ------------------------------------------------------------
            // update change in description in tasks array of task objects
            // ------------------------------------------------------------
            for (const task of tasks) {
                if (task._id === id) {
                    task.description = text;
                    task.date = date;
                    break;
                }
            }
            // ------------------------------------------------------------
            // set modified tasks array to user tasks
            // ------------------------------------------------------------
            user.tasks = tasks;
            // ------------------------------------------------------------
            // update user in redux state
            // ------------------------------------------------------------
            updateState("USER", Object.assign({}, user));
            // ------------------------------------------------------------
            // update task description and last updated date in db
            // ------------------------------------------------------------
            await updateTaskDescAndDate(id, text, date);
        }
    };
    // ------------------------------------------------------------
    // method to toggle checked state of task in redux state and db
    // ------------------------------------------------------------
    toggleTaskStatus = async () => {
        // ------------------------------------------------------------
        // extract props and tasks from user
        // ------------------------------------------------------------
        const { user, id, updateState } = this.props;
        const { tasks } = user;
        // ------------------------------------------------------------
        // track newChecked state to pass to api method
        // ------------------------------------------------------------
        let newChecked;
        // ------------------------------------------------------------
        // update checked state in tasks array
        // ------------------------------------------------------------
        for (const task of tasks) {
            if (task._id === id) {
                newChecked = !task.checked;
                task.checked = newChecked;
                break;
            }
        }
        // ------------------------------------------------------------
        // set modified tasks array to user tasks
        // ------------------------------------------------------------
        user.tasks = tasks;
        // ------------------------------------------------------------
        // update user in redux state
        // ------------------------------------------------------------
        updateState("USER", Object.assign({}, user));
        // ------------------------------------------------------------
        // update checked state of task in db
        // ------------------------------------------------------------
        await updateTaskCheckState(id, newChecked);
    };
    // ------------------------------------------------------------
    // method to delete task in redux state and db
    // ------------------------------------------------------------
    deleteTask = async () => {
        // ------------------------------------------------------------
        // extract props and tasks from user
        // ------------------------------------------------------------
        const { user, id, updateState } = this.props;
        const { tasks } = user;
        // ------------------------------------------------------------
        // delete task in tasks array
        // ------------------------------------------------------------
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i]._id === id) {
                tasks.splice(i, 1);
                break;
            }
        }
        // ------------------------------------------------------------
        // set modified tasks array to user tasks
        // ------------------------------------------------------------
        user.tasks = tasks;
        // ------------------------------------------------------------
        // update user in redux state
        // ------------------------------------------------------------
        updateState("USER", Object.assign({}, user));
        // ------------------------------------------------------------
        // delete task in db
        // ------------------------------------------------------------
        await deleteTask(user, id);
    };
    // ------------------------------------------------------------
    // render method
    // ------------------------------------------------------------
    render() {
        // ------------------------------------------------------------
        // extract props, state, and colors
        // ------------------------------------------------------------
        const { checked, description, date, style } = this.props;
        const { isTextField } = this.state;
        const { salmon, white, black } = color;
        // ------------------------------------------------------------
        // construct field or input props
        // ------------------------------------------------------------
        const fieldOrInputProps = {
            isTextField,
            textValue: description,
            switchToInput: this.switchToInput,
            switchToText: this.switchToText,
            checked: checked
        };
        // ------------------------------------------------------------
        // return component
        // ------------------------------------------------------------
        return (
            <div
                style={{
                    ...s.container,
                    ...style
                }}
            >
                {/* LOGO ICON TO INDICATE CHECKED STATE */}
                <LogoIcon
                    background={checked ? salmon : white}
                    check={checked ? white : black}
                    outline={checked ? salmon : black}
                    onClick={this.toggleTaskStatus}
                    animationTiming={0.3}
                />
                {/* FIELD OR INPUT COMPONENT TO SEAMLESSLY UPDATE */}
                <FieldOrInput {...fieldOrInputProps} />
                {/* DISPLAY DATE LAST UPDATED */}
                <div style={checked ? s.dateComplete : s.dateIncomplete}>
                    {date}
                </div>
                {/* DELETE ICON TO DELETE TASK */}
                <img
                    src="/static/delete.svg"
                    style={s.delete}
                    onClick={this.deleteTask}
                />
            </div>
        );
    }
}
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
Task.propTypes = {
    checked: PropTypes.bool,
    description: PropTypes.string.isRequired,
    date: PropTypes.string
};
// ------------------------------------------------------------
// default props
// ------------------------------------------------------------
Task.defaultProps = {
    checked: false
};
// ------------------------------------------------------------
// export Task with mapState and mapDispatch
// ------------------------------------------------------------
export default withRedux(Task, true, true);
