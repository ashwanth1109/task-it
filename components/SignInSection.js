import Card from "./Card";
import LabelInput from "./LabelInput";
import Button from "./Button";
import { loginSignUpSection as s } from "../styles/component";
// ------------------------------------------------------------
// LoginSection
// ------------------------------------------------------------
const LoginSection = ({
    highlightLogo,
    unHighlightLogo,
    signIn,
    goToSignUp,
    showLogin
}) => (
    <div style={{ ...s.section, left: showLogin ? "0px" : "-100vw" }}>
        <Card style={s.cardContainer}>
            <LabelInput
                icon="/static/username.svg"
                title="username"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
                loginForm
            />
            <LabelInput
                icon="/static/password.svg"
                title="password"
                type="password"
                onFocus={highlightLogo}
                onBlur={unHighlightLogo}
                loginForm
            />
            <Button style={s.button} onClick={signIn}>
                Sign In
            </Button>
            <div style={s.signUpText}>
                <div style={{ cursor: "pointer" }} onClick={goToSignUp}>
                    Dont have an account? Create one
                </div>
            </div>
        </Card>
    </div>
);
// ------------------------------------------------------------
// export LoginSection
// ------------------------------------------------------------
export default LoginSection;
