// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { logoIcon as s } from "../styles/component"; // component styles
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Logo from "./Logo";
// ------------------------------------------------------------
// Logo Icon stateless component
// ------------------------------------------------------------
const LogoIcon = ({ background, check, outline, onClick, animationTiming }) => (
    <div style={s.container}>
        <Logo
            width={30}
            height={30}
            background={background}
            check={check}
            outline={outline}
            onClick={onClick ? onClick : null}
            animationTiming={animationTiming ? animationTiming : 0}
        />
    </div>
);
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
LogoIcon.propTypes = {
    background: PropTypes.string.isRequired,
    check: PropTypes.string.isRequired,
    outline: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    animationTiming: PropTypes.number.isRequired
};
// ------------------------------------------------------------
// default props
// ------------------------------------------------------------
LogoIcon.defaultProps = {
    animationTiming: 0
};
// ------------------------------------------------------------
// export LogoIcon
// ------------------------------------------------------------
export default LogoIcon;
