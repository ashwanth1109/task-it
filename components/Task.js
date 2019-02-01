// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import PropTypes from "prop-types";
import moment from "moment";
import Logo from "./Logo";
import color from "../styles/color";
import { task as s } from "../styles/component";
import TextField from "./TextField";
import TextInput from "./TextInput";
import withRedux from "../lib/redux/withRedux";
// ------------------------------------------------------------
// Task component
// ------------------------------------------------------------
class Task extends React.Component {
    state = {
        isTextField: true
    };

    alternateTextAndInput = () =>
        this.setState({ isTextField: !this.state.isTextField });

        }
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
