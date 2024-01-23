require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, HEAD, PUT, DELETE, PATCH",
    credential: true,
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

const packages_route = require("./routes/packages");
const connectDB = require("./db/db");

app.get("/", (req, res) => {
    res.send("Hi, I am Live!!")
})

//middleware
app.use("/packages", packages_route)

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected!!`)
        })
    } catch (error) {
        console.log(`Error From app.js: ${error}`)
    }
}

start();