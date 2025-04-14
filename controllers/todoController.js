import Todo from "../models/Todo.js";
import { successHandler, errorHandler } from "../utils/responseHandlers.js";


export const addTodo = async (req, res) => {
    const { todoMessage, creatorEmail } = req.body;
    if (!todoMessage || !creatorEmail) {
        return errorHandler(res, 400, "Missing Fields");
    }

    try {
        await Todo.create({
            todoMessage,
            creatorEmail
        })

        return successHandler(res, 200, "Todo Created Successfully")
    } catch (error) {
        return errorHandler(res, 400, "Code phat gaya", error.message)
    }

}