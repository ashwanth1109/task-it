// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { taskList as s } from "../styles/component"; // component styles
import withRedux from "../lib/redux/withRedux"; // REDUX HOC
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Task from "./Task";
// ------------------------------------------------------------
// TaskList stateful component
// ------------------------------------------------------------
const TaskList = ({ user }) => {
    // ------------------------------------------------------------
    // extract tasks from user
    // ------------------------------------------------------------
    const tasks = user.tasks || [];
    return (
        <div style={s.container}>
            {/* create list of TASK components from tasks data */}
            {tasks.map((task, id) => (
                <Task
                    key={id}
                    id={task._id}
                    checked={task.checked}
                    description={task.description}
                    date={task.date}
                />
            ))}
        </div>
    );
};
// ------------------------------------------------------------
// export TaskList withRedux => mapState only
// ------------------------------------------------------------
export default withRedux(React.memo(TaskList), true, false);
