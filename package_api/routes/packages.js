const express = require("express")
const router = express.Router()
const { getAllPackages } = require("../controllers/packages")


router.route("/").get(getAllPackages);

module.exports = router;