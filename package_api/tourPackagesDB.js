const connectDB = require("./db/db")
const package = require("./model/packages")

const packageJson = require("./tourPackages.json")

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL)
        await package.deleteMany();
        await package.create(packageJson);
        console.log("Success")
    } catch (error) {
        console.log(`error from TourPackageDB ${error}`)
    }
}

start();