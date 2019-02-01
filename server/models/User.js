// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const Task = require("./Task");
// ------------------------------------------------------------
// user schema for db entry
// ------------------------------------------------------------
const userSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "tasks"
        }
    ]
});
// ------------------------------------------------------------
// user class for api methods
// ------------------------------------------------------------
class UserClass {
    // ------------------------------------------------------------
    // static method to register a new user
    // ------------------------------------------------------------
    static async register({ username, password, name }) {
        try {
            const user = await this.findOne({ username });
            if (user) {
                return { error: "Username already exists" };
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            return this.create({
                username,
                password: hashedPassword,
                name,
                tasks: []
            });
        } catch (err) {
            console.log(err);
        }
    }
    // ------------------------------------------------------------
    // static method to verify login credentials for existing user
    // ------------------------------------------------------------
    static async login({ username, password }) {
        try {
            const user = await this.findOne({ username });
            if (user) {
                console.log(user);
                const isMatch = await bcrypt.compare(password, user.password);
                if (isMatch) {
                    const tasks = await Task.fetchTasks(user.tasks);
                    return {
                        loginSuccessful: true,
                        user: {
                            username: user.username,
                            name: user.name,
                            tasks: tasks
                        }
                    };
                } else {
                    return {
                        loginSuccessful: false,
                        message: "password doesn't match"
                    };
                }
            } else {
                return { loginSuccessful: false, message: "user not found" };
            }
        } catch (err) {
            console.log(err);
        }
    }
    // ------------------------------------------------------------
    // static method to add a new task to a user
    // ------------------------------------------------------------
    static async addTaskToUser({ user, description, date }) {
        try {
            const task = await Task.addTask(description, date);
            console.log(`=================PRINTING IN USER MODEL`);
            console.log(task);
            const { username } = user;
            await User.updateOne(
                { username: username },
                { $push: { tasks: task._id } }
            );
            return task;
        } catch (err) {
            console.log(err);
        }
    }
                { username: user.username },
                { $set: { tasks: user.tasks } }
            );
            return task;
        } catch (err) {
            console.log(err);
        }
    }
}
// ------------------------------------------------------------
// load class properties into schema
// ------------------------------------------------------------
userSchema.loadClass(UserClass);
// ------------------------------------------------------------
// create user mongoose model and export it
// ------------------------------------------------------------
const User = mongoose.model("users", userSchema);
module.exports = User;
