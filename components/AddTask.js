// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { addTask as s } from "../styles/component";
import withRedux from "../lib/redux/withRedux";
import Logo from "./Logo";
import color from "../styles/color";
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
                <div style={{ ...s.section, ...s.section1 }}>
                    <div style={s.logo}>
                        <Logo
                            width={30}
                            height={30}
                            background={color.royalBlue}
                            check={color.white}
                            outline={color.royalBlue}
                        />
                    </div>
                    <div style={s.addTask}>Add a task</div>
                </div>
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
