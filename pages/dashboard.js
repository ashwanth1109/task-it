// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { dashboard as s } from "../styles/component"; // component styles
import withRedux from "../lib/redux/withRedux"; // REDUX HOC
import Router from "next/router"; // next router
import moment from "moment"; // moment js
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Card from "../components/Card";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
// ------------------------------------------------------------
// dashboard page class component
// ------------------------------------------------------------
class Dashboard extends React.Component {
    // ------------------------------------------------------------
    // componentDidMount => if user doesnt exist, reroute to login page
    // ------------------------------------------------------------
    componentDidMount({ user } = this.props) {
        if (user === null) {
            Router.push("/");
        }
    }
    // ------------------------------------------------------------
    // render method => only render if user exists
    // ------------------------------------------------------------
    render({ user } = this.props) {
        if (user === null) {
            return null;
        } else {
            return (
                <div style={s.container}>
                    {/* CARD FOR ADD TASK */}
                    <Card style={s.cardContainer}>
                        {/* HEADER MESSAGE */}
                        <div style={s.header}>
                            <div style={s.title}>Welcome, {user.name}</div>
                            <div style={s.date}>{moment().format("LL")}</div>
                        </div>
                        {/* ADD TASK COMPONENT */}
                        <AddTask />
                    </Card>
                    <div style={s.spacer} />
                    {/* CARD FOR TASK LIST */}
                    <Card style={s.cardContainer}>
                        {/* TASK LIST COMPONENT */}
                        <TaskList />
                    </Card>
                    <div style={s.spacer} />
                </div>
            );
        }
    }
}
// ------------------------------------------------------------
// export dashboard withRedux => mapState only
// ------------------------------------------------------------
export default withRedux(Dashboard, true, false);
