require('dotenv').config();
const express = require("express")
const app = express();
const cors = require("cors")
const authRoute = require("./routes/auth-router");
const contactRoute =require("./routes/contact-router")
const connectDB = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

//cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, HEAD, PUT, DELETE, PATCH",
    credential: true,
}

app.use(cors(corsOptions));
//middle ware json file
app.use(express.json());

app.use("/TRIPPO/auth",authRoute);
app.use("/TRIPPO",contactRoute)


app.use(errorMiddleware)
  
const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`SERVER LISTENING at ${PORT}`);
    })
})
