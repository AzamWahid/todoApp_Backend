import express from 'express'
import { loginController, registerController } from '../controllers/authController.js';

const authRoutes = express.Router();

console.log('auht ke router tak pouch gya')

authRoutes.post('/register', registerController)
authRoutes.post('/login', loginController)



export {authRoutes}