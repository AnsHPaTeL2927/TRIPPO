const User = require("../models/user-model"); 
const bcrypt = require('bcryptjs')

//************************************ */
//***********HOME PAGE LOGIN********** */

const home = async (req, res) => {
    try {
        res.status(200).json({ message: "Welcome to Home Page" });
    } catch (error) {
        console.log(`Error from auth-controller Home Logic: ${error}`);
        res.status(400).json({ message: "Page not Found" });
    }
}; 

//******************************************//
//***********Register PAGE LOGIN************//


const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, password, phone } = req.body;

        const userExist = await User.findOne({ email }); 

        if (userExist) {
            return res.status(400).json({ message: "User already Exist" });
        }

        // hashing
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);
 
        const userCreated = await User.create({
            username,
            email,
            password,
            phone,
        });

        res.status(200).json({
            msg: "Registration Successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
            // email: userCreated.email
        });
    } catch (error) {
        console.log(`Error from auth-controller Register Logic: ${error}`);
        res.status(400).json({ message: "Page not Found" });
    }
};

//************************************* */
//***********Login PAGE LOGIN********** */

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email })
        console.log(userExist);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isPasswordVerified = await bcrypt.compare(password, userExist.password);

        if (isPasswordVerified) {
            res.status(200).json({
                msg: "Login Successfully",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
                // email: userExist.email
            });
        }
        else{
            res.status(400).json({ message: "Invalid Email and Password" });
        }

    } catch (error) {
        console.log(`Error from auth-controller Login Logic: ${error}`);
        res.status(400).json({ message: "Page not Found" });
    }
};

//*************************************************** */
//***********to send user data - User Logic********** */
const user = async(req, res) => {
    try {
        const userData = req.user;
        console.log(userData)
        res.status(200).json({ userData })
    } catch (error) {
        console.log(`Error From User Send Data Logic ${error}`)
    }
}



module.exports = { home, register, login, user };
