// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import withRedux from "../lib/redux/withRedux";
import Router from "next/router";
import { dashboard as s } from "../styles/component";
import Card from "../components/Card";
import * as moment from "moment";
import AddTask from "../components/AddTask";
// ------------------------------------------------------------
// dashboard page stateless component
// ------------------------------------------------------------
class Dashboard extends React.Component {
    componentDidMount({ user, updateState } = this.props) {
        if (user === null) {
            // Router.push("/");
            updateState("USER", {
                name: "Test User",
                tasks: [],
                username: "test"
            });
        }
    }
    render({ user } = this.props) {
        if (user === null) {
            return null;
        } else {
            return (
                <div style={s.container}>
                    <Card style={s.cardContainer}>
                        <div style={s.header}>
                            <div style={s.title}>Welcome, {user.name}</div>
                            <div style={s.date}>{moment().format("LL")}</div>
                        </div>
                        <AddTask />
                    </Card>
                </div>
            );
        }
    }
}
// ------------------------------------------------------------
// export dashboard
// ------------------------------------------------------------
export default withRedux(Dashboard, true, true);
