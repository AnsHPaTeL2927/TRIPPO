const express = require("express")
const router = express.Router();
const authControllers = require("../controllers/auth-controllers")
const { registerSchema, loginSchema } = require("../validators/auth-validate")
const validate = require("../middlewares/validate-middleware")
const authMiddleware = require("../middlewares/auth-middleware")

router.route("/").get(authControllers.home);

router.route("/register").post(validate(registerSchema), authControllers.register);
// router.route("/register").get(authControllers.register);

router.route("/login").post(validate(loginSchema),
    authControllers.login);
// router.route("/login").get(authControllers.login);

router.route("/user").get(authMiddleware, authControllers.user)

module.exports = router;