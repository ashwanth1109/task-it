// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import withRedux from "../lib/redux/withRedux";
import Router from "next/router";
import { dashboard as s } from "../styles/component";
import Card from "../components/Card";
import * as moment from "moment";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
// ------------------------------------------------------------
// dashboard page stateless component
// ------------------------------------------------------------
class Dashboard extends React.Component {
    componentDidMount({ user, updateState } = this.props) {
        if (user === null) {
            Router.push("/");
            // updateState("USER", {
            //     name: "Test User",
            //     "tasks": [
            //         {
            //             "description": "Complete wireframes for Task It",
            //             "date": "January 31, 2019",
            //             "checked": true
            //         },
            //         {
            //             "description": "Complete designs for Task It",
            //             "date": "January 31, 2019",
            //             "checked": true
            //         },
            //         {
            //             "description": "Complete frontend for Task It",
            //             "date": "January 31, 2019",
            //             "checked": false
            //         },
            //         {
            //             "description":
            //                 "This is a super long task and it should get cut off by the overflow property. This is a super long task and it should get cut off by the overflow property.",
            //             "date": "January 31, 2019",
            //             "checked": false
            //         }
            //     ],
            //     username: "test"
            // });
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
                    <Card style={{ ...s.cardContainer, marginTop: "50px" }}>
                        <TaskList />
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
