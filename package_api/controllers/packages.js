const tourPackages = require("../model/packages")

const getAllPackages = async (req, res) => {

    const { package_Id, destination, duration, price, _id, sort } = req.query;
    const queryObject = {}

    if (package_Id) {
        queryObject.package_Id = package_Id;
    }

    if (destination) {
        queryObject.destination = { $regex: destination, $options: "i" }
    }

    if (_id) {
        queryObject._id = _id
    }

    let apiData = tourPackages.find(queryObject);

    if(sort){
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix)
    }

    console.log(queryObject)

    const data = await apiData
    res.status(200).json({ data });
};

module.exports = { getAllPackages }