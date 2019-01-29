// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { labelInput as s } from "../styles/component";
import PropTypes from "prop-types";
import withRedux from "../lib/redux/withRedux";
// ------------------------------------------------------------
// LabelInput component
// ------------------------------------------------------------
class LabelInput extends React.Component {
    componentDidMount({ formRefs, updateState, title } = this.props) {
        formRefs[title] = this.refs[title];
        updateState("FORM_REFS", formRefs);
    }
    render({ icon, title, type, onFocus, onBlur } = this.props) {
        return (
            <div style={s.container}>
                <div style={s.label}>
                    <img src={icon} style={s.icon} alt="user" />
                </div>
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
