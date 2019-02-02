// ------------------------------------------------------------
// import depedencies
// ------------------------------------------------------------
import { loginSignUpSection as s } from "../styles/component"; // component styles
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Card from "../components/Card";
import LabelInput from "../components/LabelInput";
import Button from "../components/Button";
// ------------------------------------------------------------
// SignUpSection
// ------------------------------------------------------------
const SignUpSection = ({
    highlightLogo,
    unHighlightLogo,
    signUp,
    goToSignIn,
    showLogin
}) => (
    <div style={{ ...s.section, left: showLogin ? "100vw" : "0px" }}>
        {/* REGISTER CARD */}
        <Card style={s.cardContainer}>
            {/* USERNAME INPUT */}
            <LabelInput
                icon="/static/username.svg"
                title="username"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
            />
            {/* PASSWORD INPUT */}
            <LabelInput
                icon="/static/password.svg"
                title="password"
                type="password"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
            />
            {/* NAME INPUT */}
            <LabelInput
                icon="/static/name.svg"
                title="name"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
            />
            {/* SIGN UP BUTTON */}
            <Button style={s.button} onClick={signUp}>
                Sign Up
            </Button>
            {/* SIGN IN TEXT */}
            <div style={s.signUpText}>
                <div style={{ cursor: "pointer" }} onClick={goToSignIn}>
                    Already have an account? Log in
                </div>
            </div>
        </Card>
    </div>
);
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
SignUpSection.propTypes = {
    highlightLogo: PropTypes.func.isRequired,
    unHighlightLogo: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
    goToSignIn: PropTypes.func.isRequired,
    showLogin: PropTypes.bool.isRequired
};
// ------------------------------------------------------------
// export SignUpSection
// ------------------------------------------------------------
export default SignUpSection;
