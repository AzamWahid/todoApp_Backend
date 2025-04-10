import express from 'express'
import { registerController } from '../controllers/authController.js';

const authRoutes = express.Router();

console.log('auht ke router tak pouch gya')

authRoutes.post('/register', registerController)



export {authRoutes}