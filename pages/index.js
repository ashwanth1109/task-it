// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Logo from "../components/Logo";
import Card from "../components/Card";
import { index as s } from "../styles/component";
import color from "../styles/color";
import withRedux from "../lib/redux/withRedux";
import LabelInput from "../components/LabelInput";
// ------------------------------------------------------------
// index page stateless component
// ------------------------------------------------------------
class Index extends React.Component {
    state = {
        highlight: false
    };
    highlightLogo = () => this.setState({ highlight: true });
    unHighlightLogo = () => this.setState({ highlight: false });
    render({ highlight } = this.state) {
        return (
            <div style={s.container}>
                <Logo
                    background={highlight ? color.orange : color.cream}
                    check={highlight ? color.cream : color.orange}
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
                </Card>
            </div>
        );
    }
}
// ------------------------------------------------------------
// export index
// ------------------------------------------------------------
export default withRedux(Index, true, false);
