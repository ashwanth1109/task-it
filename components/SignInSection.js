// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { loginSignUpSection as s } from "../styles/component"; // component styles
import PropTypes from "prop-types"; // prop type validation
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Card from "./Card";
import LabelInput from "./LabelInput";
import Button from "./Button";
// ------------------------------------------------------------
// SignInSection
// ------------------------------------------------------------
const SignInSection = ({
    highlightLogo,
    unHighlightLogo,
    signIn,
    goToSignUp,
    showLogin
}) => (
    <div style={{ ...s.section, left: showLogin ? "0px" : "-100vw" }}>
        {/* LOGIN CARD */}
        <Card style={s.cardContainer}>
            {/* USERNAME INPUT */}
            <LabelInput
                icon="/static/username.svg"
                title="username"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
                loginForm
            />
            {/* PASSWORD INPUT */}
            <LabelInput
                icon="/static/password.svg"
                title="password"
                type="password"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
                loginForm
            />
            {/* SIGN IN BUTTON */}
            <Button style={s.button} onClick={signIn}>
                Sign In
            </Button>
            {/* SIGN UP TEXT */}
            <div style={s.signUpText}>
                <div style={{ cursor: "pointer" }} onClick={goToSignUp}>
                    Dont have an account? Create one
                </div>
            </div>
        </Card>
    </div>
);
// ------------------------------------------------------------
// prop type validation
// ------------------------------------------------------------
SignInSection.propTypes = {
    highlightLogo: PropTypes.func.isRequired,
    unHighlightLogo: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    goToSignUp: PropTypes.func.isRequired,
    showLogin: PropTypes.bool.isRequired
};
// ------------------------------------------------------------
// export SignInSection
// ------------------------------------------------------------
export default SignInSection;
