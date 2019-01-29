// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
const mongoose = require("mongoose");
const { Schema } = mongoose;
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
// create user mongoose model and export it
// ------------------------------------------------------------
const User = mongoose.model("users", userSchema);
module.exports = User;
