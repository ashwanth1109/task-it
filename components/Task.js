// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import PropTypes from "prop-types";
import Logo from "./Logo";
import color from "../styles/color";
import { task as s } from "../styles/component";
// ------------------------------------------------------------
// Task stateless component
// ------------------------------------------------------------
const Task = ({ checked, description, date, style }) => {
    let background,
        check,
        outline,
        clickable = false;
    const { salmon, white, royalBlue } = color;
    if (checked === true) {
        [background, check, outline] = [salmon, white, salmon];
    } else if (checked === false) {
        [background, check, outline] = [white, salmon, salmon];
    } else {
        [background, check, outline] = [royalBlue, white, royalBlue];
        clickable = true;
    }
    return (
        <div
            style={{
                ...s.container,
                ...style,
                cursor: clickable ? "pointer" : null
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
            <div
                style={{
                    ...s.task,
                    ...(checked ? s.completeTask : s.incompleteTask)
                }}
            >
                {description}
            </div>
            {date ? (
                <div style={checked ? s.dateComplete : s.dateIncomplete}>
                    {date}
                </div>
            ) : null}
        </div>
    );
};
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
