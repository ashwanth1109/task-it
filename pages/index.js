// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Logo from "../components/Logo";
import { index as s } from "../styles/component";
import color from "../styles/color";
import withRedux from "../lib/redux/withRedux";
import { loginUser, registerUser } from "../lib/api/user";
import Router from "next/router";
import SignInSection from "../components/SignInSection";
import SignUpSection from "../components/SignUpSection";
// ------------------------------------------------------------
// index page react class component
// ------------------------------------------------------------
class Index extends React.Component {
    // ------------------------------------------------------------
    // component state => highlight
    // ------------------------------------------------------------
    state = {
        highlight: false,
        showLogin: true
    };
    // ------------------------------------------------------------
    // function to highlight logo
    // ------------------------------------------------------------
    highlightLogo = () => this.setState({ highlight: true });
    // ------------------------------------------------------------
    // function to un-highlight logo
    // ------------------------------------------------------------
    unHighlightLogo = () => this.setState({ highlight: false });
    // ------------------------------------------------------------
    // navigate to sign up page
    // ------------------------------------------------------------
    goToSignUp = () => this.setState({ showLogin: false });
    // ------------------------------------------------------------
    // navigate to sign in page
    // ------------------------------------------------------------
    goToSignIn = () => this.setState({ showLogin: true });
    // ------------------------------------------------------------
    // sign in to app
    // ------------------------------------------------------------
    signIn = async () => {
        const { username, password } = this.props.loginRefs;
        const data = await loginUser(username.value, password.value);
        if (data.loginSuccessful) {
            this.props.updateState("USER", data.user);
            Router.push("/dashboard");
        } else {
            console.log(data);
        }
    };
    signUp = async () => {
        const { username, password, name } = this.props.registerRefs;
        const data = await registerUser(
            username.value,
            password.value,
            name.value
        );
        if (data.registerSuccessful) {
            this.setState({ showLogin: true });
        }
    };
    // ------------------------------------------------------------
    // render function
    // ------------------------------------------------------------
    render({ highlight } = this.state) {
        const signInProps = {
            highlightLogo: this.highlightLogo,
            unHighlightLogo: this.unHighlightLogo,
            signIn: this.signIn,
            goToSignUp: this.goToSignUp,
            showLogin: this.state.showLogin
        };
        const signUpProps = {
            highlightLogo: this.highlightLogo,
            unHighlightLogo: this.unHighlightLogo,
            signUp: this.signUp,
            goToSignIn: this.goToSignIn,
            showLogin: this.state.showLogin
        };
        return (
            <div style={s.container}>
                <Logo
                    background={highlight ? color.salmon : color.white}
                    check={highlight ? color.white : color.salmon}
                    animationTiming={0.5}
                />
                <div style={s.sections}>
                    <SignInSection {...signInProps} />
                    <SignUpSection {...signUpProps} />
                </div>
            </div>
        );
    }
}
// ------------------------------------------------------------
// export index
// ------------------------------------------------------------
export default withRedux(Index, true, true);
