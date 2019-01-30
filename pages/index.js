// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Logo from "../components/Logo";
import Card from "../components/Card";
import { index as s } from "../styles/component";
import color from "../styles/color";
import withRedux from "../lib/redux/withRedux";
import LabelInput from "../components/LabelInput";
import Button from "../components/Button";
import { loginUser } from "../lib/api/user";
// ------------------------------------------------------------
// index page stateless component
// ------------------------------------------------------------

class Index extends React.Component {
    // ------------------------------------------------------------
    // component state => highlight
    // ------------------------------------------------------------
    state = {
        highlight: false
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
    goToSignUp = () => console.log(`go to sign up page`);
    // ------------------------------------------------------------
    // sign in to app
    // ------------------------------------------------------------
    signIn = async () => {
        const { username, password } = this.props.formRefs;
        console.log(process.env);
        const data = await loginUser(username.value, password.value);
        console.log(data);
    };
    // ------------------------------------------------------------
    // render function
    // ------------------------------------------------------------
    render({ highlight } = this.state) {
        return (
            <div style={s.container}>
                <Logo
                    background={highlight ? color.orange : color.white}
                    check={highlight ? color.white : color.orange}
                    animationTiming={1}
                />
                <Card style={s.cardContainer}>
                    <LabelInput
                        icon="/static/username.svg"
                        title="username"
                        onFocus={this.highlightLogo}
                        onBlur={this.unHighlightLogo}
                    />
                    <LabelInput
                        icon="/static/password.svg"
                        title="password"
                        type="password"
                        onFocus={this.highlightLogo}
                        onBlur={this.unHighlightLogo}
                    />
                    <Button style={s.button} onClick={this.signIn}>
                        Sign In
                    </Button>
                    <div style={s.signUp}>
                        <div
                            style={{ cursor: "pointer" }}
                            onClick={this.goToSignUp}
                        >
                            Dont have an account? Create one
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}
// ------------------------------------------------------------
// export index
// ------------------------------------------------------------
export default withRedux(Index, true, false);
