// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import dotenv from "dotenv";
import next from "next";
import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import mongoSessionStore from "connect-mongo";
import api from "./api";
// ------------------------------------------------------------
// configure environment variables
// ------------------------------------------------------------
dotenv.config();
// ------------------------------------------------------------
// get next server & options
// ------------------------------------------------------------
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT;
const rootUrl = process.env.ROOT_URL;
const mongoUrl = process.env.MONGO_URL;
// ------------------------------------------------------------
// configure mongoose options
// ------------------------------------------------------------
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
};
// ------------------------------------------------------------
// create next application
// ------------------------------------------------------------
const app = next({ dev });
const handler = app.getRequestHandler();
// ------------------------------------------------------------
// prepare next app
// ------------------------------------------------------------
app.prepare()
    .then(() => {
        // ------------------------------------------------------------
        // create express server
        // ------------------------------------------------------------
        const server = express();
        // ------------------------------------------------------------
        // express middleware
        // ------------------------------------------------------------
        server.use(express.json()); // middleware to use JSON
        // ------------------------------------------------------------
        // connect to mongo db
        // ------------------------------------------------------------
        mongoose
            .connect(
                mongoUrl,
                mongooseOptions
            )
            .then(() => console.log("> MONGO connection established"))
            .catch(err => console.log(err));
        // ------------------------------------------------------------
        // save session to mongo store
        // ------------------------------------------------------------
        const MongoStore = mongoSessionStore(session);
        const sesh = {
            name: "taskit.sid",
            secret: process.env.SECRET,
            store: new MongoStore({
                mongooseConnection: mongoose.connection,
                ttl: 7 * 24 * 60 * 60
            }),
            resave: false,
            saveUninitialized: false,
            cookie: {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000
            }
        };
        // ------------------------------------------------------------
        // enable server to use session
        // ------------------------------------------------------------
        server.use(session(sesh));

        // ------------------------------------------------------------
        // api routes (for custom server routes)
        // ------------------------------------------------------------
        api(server);

        // ------------------------------------------------------------
        // catch all route - place after custom routes
        // ------------------------------------------------------------
        server.get("*", (req, res) => handler(req, res));

        // ------------------------------------------------------------
        // setup server to listen on port
        // ------------------------------------------------------------
        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on ${rootUrl}`);
        });
    })
    .catch(err => {
        console.error(err.stack);
        process.exit(1);
    });
