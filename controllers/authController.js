import Users from '../models/users.js'
import { successHandler, errorHandler } from "../utils/responseHandlers.js";


export const registerController = async (req, res) => {
    console.log("resiter successfully")
    // console.log(req.body)
    const { userName, email, password, firstName, lastName, age, isAdmin } = req.body

    if (!userName || !email || !password || !firstName || !lastName) {
        // return errorHandler(res, 400, "missing fields");
        return res.status(400).json({
            status: false,
            message: "missing fields",
        })
    }

    // const isExists = await Users.find({ $or: [{ email: email }, { userName: userName }] })
    const isExists = await Users.findOne({ $or: [{ email: email }, { userName: userName }] })


    if (isExists) {
        return errorHandler(res, 400, "UserName or Email Address already exists, please change and retry")
    }

    if (password.length < 8) {
        return errorHandler(res, 400, "Password length should be minimum 8 characters long")

    }

    try {
        await Users.create({
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email
        })
        return successHandler(res, 200, "User Registered Successfully")

    } catch (error) {
        return errorHandler(res, 400, "Code Phat gaya", error.message)

    }

}