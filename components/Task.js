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
// ------------------------------------------------------------
// Task component
// ------------------------------------------------------------
class Task extends React.Component {
    state = {
        isTextField: true
    };

    alternateTextAndInput = () =>
        this.setState({ isTextField: !this.state.isTextField });

    render(
        { checked, description, date, style } = this.props,
        { isTextField } = this.state
    ) {
        let background,
            check,
            outline,
            addTask = false;
        const { salmon, white, royalBlue } = color;
        if (checked === true) {
            [background, check, outline] = [salmon, white, salmon];
        } else if (checked === false) {
            [background, check, outline] = [white, salmon, salmon];
        } else {
            [background, check, outline] = [royalBlue, white, royalBlue];
            addTask = true;
        }
        return (
            <div
                style={{
                    ...s.container,
                    ...style,
                    cursor: "pointer"
                }}
            >
                <div style={s.logo}>
                    <Logo
                        width={30}
                        height={30}
                        background={background}
                        check={check}
                        outline={outline}
                    />
                </div>
                {isTextField ? (
                    <TextField
                        checked={checked}
                        description={description}
                        onClick={this.alternateTextAndInput}
                    />
                ) : (
                    <TextInput
                        onBlur={this.alternateTextAndInput}
                        description={!addTask ? description : ""}
                    />
                )}
                {date ? (
                    <div style={checked ? s.dateComplete : s.dateIncomplete}>
                        {moment(date).format("LL")}
                    </div>
                ) : null}
                {!addTask ? (
                    <img src="/static/delete.svg" style={s.delete} />
                ) : null}
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
export default Task;
