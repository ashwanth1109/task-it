// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { labelInput as s } from "../styles/component"; // component styles
import withRedux from "../lib/redux/withRedux"; // Redux HOC
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// LabelInput component
// ------------------------------------------------------------
class LabelInput extends React.Component {
    // ------------------------------------------------------------
    // componentDidMount => store refs in redux state
    // ------------------------------------------------------------
    componentDidMount() {
        // ------------------------------------------------------------
        // extract props
        // ------------------------------------------------------------
        const {
            loginRefs,
            registerRefs,
            updateState,
            title,
            loginForm
        } = this.props;
        // ------------------------------------------------------------
        // check if label input is for login or register section
        // ------------------------------------------------------------
        if (loginForm) {
            // ------------------------------------------------------------
            // store login input field refs in redux state
            // ------------------------------------------------------------
            loginRefs[title] = this.refs[title];
            updateState("LOGIN_REFS", loginRefs);
        } else {
            // ------------------------------------------------------------
            // store register input field refs in redux state
            // ------------------------------------------------------------
            registerRefs[title] = this.refs[title];
            updateState("REGISTER_REFS", registerRefs);
        }
    }
    // ------------------------------------------------------------
    // render method
    // ------------------------------------------------------------
    render() {
        // ------------------------------------------------------------
        // extract props
        // ------------------------------------------------------------
        const { icon, title, type, onFocus, onBlur } = this.props;
        // ------------------------------------------------------------
        // return component
        // ------------------------------------------------------------
        return (
            <div style={s.container}>
                {/* INPUT ICON */}
                <div style={s.label}>
                    <img src={icon} style={s.icon} alt="user" />
                </div>
                {/* INPUT FIELD */}
                <input
                    type={type}
                    placeholder={title}
                    ref={title}
                    style={s.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
        );
    }
}
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
LabelInput.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};
// ------------------------------------------------------------
// default props
// ------------------------------------------------------------
LabelInput.defaultProps = {
    type: "text"
};
// ------------------------------------------------------------
// export LabelInput
// ------------------------------------------------------------
export default withRedux(LabelInput, true, true);
