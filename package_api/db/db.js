const moongoose = require("mongoose")

uri = "mongodb+srv://patelansh2918:LWQGiqdqVo0ZyflM@cluster0.ms7amfn.mongodb.net/RESTAPI?retryWrites=true&w=majority"

const connectDB = () => {
    console.log("connect DB")
    return moongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;