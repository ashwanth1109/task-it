// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { addTask as s } from "../styles/component";
import withRedux from "../lib/redux/withRedux";
import Task from "./Task";
import { addTaskToUser } from "../lib/api/task";
// ------------------------------------------------------------
// AddTask component
// ------------------------------------------------------------
class AddTask extends React.Component {
    addTask = async () => {
        const { user, addToDo, updateState } = this.props;
        user.tasks.push(await addTaskToUser(user, addToDo));
        updateState("USER", user);
    };
    render() {
        return (
            <div style={s.container}>
                <Task description="Add a task" />
                <div style={s.section} />
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
// export AddTask
// ------------------------------------------------------------
export default withRedux(AddTask, true, true);
