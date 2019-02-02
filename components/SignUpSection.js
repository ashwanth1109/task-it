import Card from "../components/Card";
import LabelInput from "../components/LabelInput";
import Button from "../components/Button";
import { loginSignUpSection as s } from "../styles/component";
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
        <Card style={s.cardContainer}>
            <LabelInput
                icon="/static/username.svg"
                title="username"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
            />
            <LabelInput
                icon="/static/password.svg"
                title="password"
                type="password"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
            />
            <LabelInput
                icon="/static/name.svg"
                title="name"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
            />
            <Button style={s.button} onClick={signUp}>
                Sign Up
            </Button>
            <div style={s.signUpText}>
                <div style={{ cursor: "pointer" }} onClick={goToSignIn}>
                    Already have an account? Log in
                </div>
            </div>
        </Card>
    </div>
);
// ------------------------------------------------------------
// export SignUpSection
// ------------------------------------------------------------
export default SignUpSection;
