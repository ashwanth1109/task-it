// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { taskList as s } from "../styles/component";
import withRedux from "../lib/redux/withRedux";
import Task from "./Task";
// ------------------------------------------------------------
// TaskList stateful component
// ------------------------------------------------------------
const TaskList = ({ user }) => {
    const tasks = user.tasks || [];
    return (
        <div style={s.container}>
            {tasks.map((task, id) => (
                <Task
                    key={id}
                    id={id}
                    checked={task.checked}
                    description={task.description}
                    date={task.date}
                />
            ))}
        </div>
    );
};
// ------------------------------------------------------------
// export TaskList
// ------------------------------------------------------------
export default withRedux(TaskList, true, false);
