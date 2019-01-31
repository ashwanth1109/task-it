// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import PropTypes from "prop-types";
import color from "../styles/color";
// ------------------------------------------------------------
// Logo Stateless SVG Component
// ------------------------------------------------------------
const Logo = ({
    width,
    height,
    background,
    check,
    animationTiming,
    outline
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 438 438"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Logo - Task it</title>
            <defs />
            <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g id="Logo" transform="translate(-750.000000, -175.000000)">
                    <g
                        id="Group-Copy"
                        transform="translate(755.000000, 180.000000)"
                    >
                        <circle
                            id="Oval"
                            stroke={outline}
                            strokeWidth="10"
                            fill={background}
                            cx="214"
                            cy="214"
                            r="214"
                            style={{
                                transition: `${animationTiming}s ease-in-out fill`
                            }}
                        />
                        <path
                            d="M113.376923,221.9 C111.792308,220.32 111,217.95 111,216.37 C111,214.79 111.792308,212.42 113.376923,210.84 L124.469231,199.78 C127.638462,196.62 132.392308,196.62 135.561538,199.78 L136.353846,200.57 L179.930769,247.18 C181.515385,248.76 183.892308,248.76 185.476923,247.18 L291.646154,137.37 L292.438462,137.37 L292.438462,137.37 C295.607692,134.21 300.361538,134.21 303.530769,137.37 L314.623077,148.43 C317.792308,151.59 317.792308,156.33 314.623077,159.49 L314.623077,159.49 L187.853846,290.63 C186.269231,292.21 184.684615,293 182.307692,293 C179.930769,293 178.346154,292.21 176.761538,290.63 L114.961538,224.27 L113.376923,221.9 L113.376923,221.9 Z"
                            id="Shape"
                            fill={check}
                            fillRule="nonzero"
                            style={{
                                transition: `${animationTiming}s ease-in-out fill`
                            }}
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
Logo.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    background: PropTypes.string,
    check: PropTypes.string,
    animationTiming: PropTypes.number,
    outline: PropTypes.string
};
// ------------------------------------------------------------
// default props
// ------------------------------------------------------------
Logo.defaultProps = {
    width: 120,
    height: 120,
    background: color.white,
    check: color.salmon,
    animationTiming: 2,
    outline: color.salmon
};
// ------------------------------------------------------------
// export Logo
// ------------------------------------------------------------
export default Logo;
