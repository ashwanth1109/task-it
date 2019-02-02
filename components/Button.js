// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { button } from "../styles/component"; // component styles
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// Button component
// ------------------------------------------------------------
const Button = ({ children, style, onClick }) => (
    <div style={{ ...style, ...button }} className="btn1" onClick={onClick}>
        {children}
    </div>
);
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired
};
// ------------------------------------------------------------
// default props
// ------------------------------------------------------------
Button.defaultProps = {
    onClick: () => null
};
// ------------------------------------------------------------
// export Button
// ------------------------------------------------------------
export default React.memo(Button);
