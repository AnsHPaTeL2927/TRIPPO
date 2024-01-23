const mongoose = require("mongoose")

const URI = process.env.MONGODB_URL;
// mongoose.connect(URI);

const connectDB = async() => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successfully to DB")
    } catch (error) {
        console.log(`Error from db.js file: ${error}`);
        process.exit(0);
    }
}

module.exports = connectDB