// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
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
                name
            });
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
