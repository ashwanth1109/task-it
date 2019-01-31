// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { addTask as s } from "../styles/component";
import withRedux from "../lib/redux/withRedux";
import Task from "./Task";
// ------------------------------------------------------------
// AddTask component
// ------------------------------------------------------------
class AddTask extends React.Component {
    addTask = () => {
        console.log("add task to tasks array");
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
export default withRedux(AddTask, false, true);
