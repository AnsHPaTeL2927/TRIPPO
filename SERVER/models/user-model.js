const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,  
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

//hashing password middleware
userSchema.pre("save", async function (next) {
    // console.log("pre method", this)
    const user = this;

    if (!user.isModified("password")) {
        next();//jo password modified n thy to exit function
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (error) {
        console.log(`Error from userSchema.pre Function: ${error}`)
    }
})

//JSON WEB TOKEN
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                username: this.username,
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "30d",
            }
        )

    } catch (error) {
        console.log(`Error from generateToken function: ${error}`)
    }
}

//collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;