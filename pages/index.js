// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { index as s } from "../styles/component"; // component styles
import color from "../styles/color"; // color palette
import withRedux from "../lib/redux/withRedux"; // REDUX HOC
import Router from "next/router"; // next router
import { loginUser, registerUser } from "../lib/api/user"; // api methods to login and register user
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Logo from "../components/Logo";
import SignInSection from "../components/SignInSection";
import SignUpSection from "../components/SignUpSection";
// ------------------------------------------------------------
// index page react class component
// ------------------------------------------------------------
class Index extends React.Component {
    // ------------------------------------------------------------
    // component state =>
    // highlight to track whether logo should light up or not
    // showLogin to track whether to show login form or register form
    // ------------------------------------------------------------
    state = {
        highlight: false,
        showLogin: true
    };
    // ------------------------------------------------------------
    // method to highlight logo
    // ------------------------------------------------------------
    highlightLogo = () => this.setState({ highlight: true });
    // ------------------------------------------------------------
    // method to un-highlight logo
    // ------------------------------------------------------------
    unHighlightLogo = () => this.setState({ highlight: false });
    // ------------------------------------------------------------
    // method to show sign up section
    // ------------------------------------------------------------
    goToSignUp = () => this.setState({ showLogin: false });
    // ------------------------------------------------------------
    // method to show to sign in section
    // ------------------------------------------------------------
    goToSignIn = () => this.setState({ showLogin: true });
    // ------------------------------------------------------------
    // method to log in an existing user
    // ------------------------------------------------------------
    signIn = async () => {
        // ------------------------------------------------------------
        // extract username, and password from login form
        // ------------------------------------------------------------
        const { username, password } = this.props.loginRefs;
        // ------------------------------------------------------------
        // login user with username and password value using api method
        // ------------------------------------------------------------
        const data = await loginUser(username.value, password.value);
        // ------------------------------------------------------------
        // if successfully logged in,
        // ------------------------------------------------------------
        if (data.loginSuccessful) {
            // ------------------------------------------------------------
            // then add user to redux state
            // ------------------------------------------------------------
            this.props.updateState("USER", data.user);
            // ------------------------------------------------------------
            // Change route to dashboard
            // ------------------------------------------------------------
            Router.push("/dashboard");
        } else {
            // ------------------------------------------------------------
            // if login is not succesful then console log error for now
            // need to handle this better -> show error messages in form or modal
            // ------------------------------------------------------------
            console.log(data);
        }
    };
    // ------------------------------------------------------------
    // method to register a new user
    // ------------------------------------------------------------
    signUp = async () => {
        // ------------------------------------------------------------
        // extract username, password, and name from register form
        // ------------------------------------------------------------
        const { username, password, name } = this.props.registerRefs;
        // ------------------------------------------------------------
        // register user with username, password, and name value using api method
        // ------------------------------------------------------------
        const data = await registerUser(
            username.value,
            password.value,
            name.value
        );
        // ------------------------------------------------------------
        // if successfully registered user
        // ------------------------------------------------------------
        if (data.registerSuccessful) {
            // ------------------------------------------------------------
            // then show login form
            // ------------------------------------------------------------
            this.setState({ showLogin: true });
        }
    };
    // ------------------------------------------------------------
    // render function
    // ------------------------------------------------------------
    render({ highlight } = this.state) {
        // ------------------------------------------------------------
        // construct sign in section props
        // ------------------------------------------------------------
        const signInProps = {
            highlightLogo: this.highlightLogo,
            unHighlightLogo: this.unHighlightLogo,
            signIn: this.signIn,
            goToSignUp: this.goToSignUp,
            showLogin: this.state.showLogin
        };
        // ------------------------------------------------------------
        // construct sign up section props
        // ------------------------------------------------------------
        const signUpProps = {
            highlightLogo: this.highlightLogo,
            unHighlightLogo: this.unHighlightLogo,
            signUp: this.signUp,
            goToSignIn: this.goToSignIn,
            showLogin: this.state.showLogin
        };
        // ------------------------------------------------------------
        // return component
        // ------------------------------------------------------------
        return (
            <div style={s.container}>
                {/* ANIMATING LOGO */}
                <Logo
                    background={highlight ? color.salmon : color.white}
                    check={highlight ? color.white : color.salmon}
                    animationTiming={0.5}
                />
                {/* SECTIONS TO CONTAIN EITHER SIGN IN OR SIGN UP FORMS */}
                <div style={s.sections}>
                    {/* SIGN IN FORM */}
                    <SignInSection {...signInProps} />
                    {/* SIGN UP FORM */}
                    <SignUpSection {...signUpProps} />
                </div>
            </div>
        );
    }
}
// ------------------------------------------------------------
// export index withRedux => mapState and mapDispatch
// ------------------------------------------------------------
export default withRedux(Index, true, true);
