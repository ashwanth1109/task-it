// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { addTask as s } from "../styles/component";
import withRedux from "../lib/redux/withRedux";
import { addTaskToUser } from "../lib/api/task";
import color from "../styles/color";
import TextField from "./TextField";
import TextInput from "./TextInput";
import Logo from "./Logo";
import moment from "moment";
// ------------------------------------------------------------
// AddTask component
// ------------------------------------------------------------
class AddTask extends React.Component {
    state = {
        isTextField: true,
        textValue: ""
    };

    switchToInput = () => {
        this.setState({ isTextField: false });
    };

    switchToText = text => {
        this.setState({ isTextField: true, textValue: text });
    };

    addTask = async () => {
        const { user, updateState } = this.props;
        const { textValue } = this.state;
        if (textValue !== "") {
            const date = moment().format("LL");
            user.tasks.push({
                description: textValue,
                date,
                checked: false
            });
            updateState("USER", Object.assign({}, user));
            this.setState({ textValue: "" });
            try {
                console.log(user);
                const task = await addTaskToUser(user, textValue, date);
                user.tasks.pop();
                user.tasks.push(task);
                console.log(user);
                updateState("USER", Object.assign({}, user));
            } catch (err) {
                console.log(err);
            }
        }
    };
    render() {
        const { isTextField } = this.state;
        return (
            <div style={s.container}>
                <div style={s.taskHeader}>
                    <div style={s.logo}>
                        <Logo
                            width={30}
                            height={30}
                            background={color.royalBlue}
                            check={color.white}
                            outline={color.royalBlue}
                        />
                    </div>
                    {isTextField ? (
                        <TextField
                            checked={false}
                            description={this.state.textValue || "Add a task"}
                            onClick={this.switchToInput}
                        />
                    ) : (
                        <TextInput
                            onBlur={text => this.switchToText(text)}
                            description={this.state.textValue}
                        />
                    )}
                </div>
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
