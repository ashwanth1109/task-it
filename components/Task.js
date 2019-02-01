// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import PropTypes from "prop-types";
import Logo from "./Logo";
import color from "../styles/color";
import { task as s } from "../styles/component";
import TextField from "./TextField";
import TextInput from "./TextInput";
import {
    deleteTask,
    updateTaskDescAndDate,
    updateTaskCheckState
} from "../lib/api/task";
import withRedux from "../lib/redux/withRedux";
import moment from "moment";
// ------------------------------------------------------------
// Task component
// ------------------------------------------------------------
class Task extends React.Component {
    state = {
        isTextField: true
    };

    switchToText = async text => {
        this.setState({ isTextField: true });
        if (text !== this.props.description) {
            const { user, id, updateState } = this.props;
            const { tasks } = user;
            const date = moment().format("LL");
            // ------------------------------------------------------------
            // update change in description and date in redux state & in db
            // ------------------------------------------------------------
            for (const task of tasks) {
                if (task._id === id) {
                    task.description = text;
                    task.date = date;
                    break;
                }
            }
            user.tasks = tasks;
            updateState("USER", Object.assign({}, user));
            await updateTaskDescAndDate(id, text, date);
        }
    };

    deleteTask = async () => {
        const { user, id, updateState } = this.props;
        const { tasks } = user;
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i]._id === id) {
                console.log("finding a match");
                tasks.splice(i, 1);
                break;
            }
        }
        user.tasks = tasks;
        updateState("USER", Object.assign({}, user));
        await deleteTask(user, id);
    };

    toggleTaskStatus = async () => {
        const { user, id, updateState } = this.props;
        const { tasks } = user;
        let newChecked;
        for (const task of tasks) {
            if (task._id === id) {
                newChecked = !task.checked;
                task.checked = newChecked;
                break;
            }
        }
        user.tasks = tasks;
        updateState("USER", Object.assign({}, user));
        await updateTaskCheckState(id, newChecked);
    };

    render() {
        const { checked, description, date, style } = this.props;
        const { isTextField } = this.state;
        const { salmon, white, black } = color;
        return (
            <div
                style={{
                    ...s.container,
                    ...style
                }}
            >
                <div style={s.logo}>
                    <Logo
                        width={30}
                        height={30}
                        background={checked ? salmon : white}
                        check={checked ? white : black}
                        outline={checked ? salmon : black}
                        onClick={this.toggleTaskStatus}
                        animationTiming={0.3}
                    />
                </div>
                {isTextField ? (
                    <TextField
                        checked={checked}
                        description={description}
                        onClick={() => this.setState({ isTextField: false })}
                    />
                ) : (
                    <TextInput
                        onBlur={text => this.switchToText(text)}
                        description={description}
                    />
                )}
                <div style={checked ? s.dateComplete : s.dateIncomplete}>
                    {date}
                </div>

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
// export Task
// ------------------------------------------------------------
export default withRedux(Task, true, true);
