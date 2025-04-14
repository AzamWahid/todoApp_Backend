import Users from '../models/users.js'
import { successHandler, errorHandler } from "../utils/responseHandlers.js";
import { hash, compare } from "bcryptjs";


export const registerController = async (req, res) => {
    console.log("resiter successfully")
    // console.log(req.body)
    const { userName, email, password, firstName, lastName, age, isAdmin } = req.body

    if (!userName || !email || !password || !firstName || !lastName) {
        // return errorHandler(res, 400, "missing fields");
        return errorHandler(res, 400, "missing fields")
    }

    // const isExists = await Users.find({ $or: [{ email: email }, { userName: userName }] })
    const isExists = await Users.findOne({ $or: [{ email: email }, { userName: userName }] })

    const hashPassword = await hash(password, 10)
    console.log(hashPassword)
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
            password: hashPassword,
            email: email
        })
        return successHandler(res, 200, "User Registered Successfully")

    } catch (error) {
        return errorHandler(res, 400, "Code Phat gaya", error.message)

    }

}

export const loginController = async (req, res) => {
    console.log("resiter successfully")
    // console.log(req.body)
    const { email, password } = req.body

    if (!email || !password) {
        // return errorHandler(res, 400, "missing fields");
        return errorHandler(res, 400, "missing fields")
    }

    // const isExists = await Users.find({ $or: [{ email: email }, { userName: userName }] })
    const isExists = await Users.findOne({ email: email })


    if (!isExists) {
        return errorHandler(res, 400, "Email Address not exists, please retry")
    }

    if (password.length < 8) {
        return errorHandler(res, 400, "Password length should be minimum 8 characters long")

    }

    try {
        // await Users.create({
        //     userName: userName,
        //     firstName: firstName,
        //     lastName: lastName,
        //     password: password,
        //     email: email
        // })
        if ( compare(password, isExists.password)) {
            return successHandler(res, 200, "User login Successfully")
        }
    } catch (error) {
        return errorHandler(res, 400, "Code Phat gaya", error.message)

    }

}