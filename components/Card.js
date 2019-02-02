// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { card } from "../styles/component"; // component styles
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// Card component
// ------------------------------------------------------------
const Card = ({ children, style }) => (
    <div style={{ ...card, ...style }}>{children}</div>
);
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    style: PropTypes.object
};
// ------------------------------------------------------------
// export Card
// ------------------------------------------------------------
export default Card;
