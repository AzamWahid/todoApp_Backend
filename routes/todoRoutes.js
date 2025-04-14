import express from 'express'
import { addTodo } from '../controllers/todoController.js';

const todoRoutes = express.Router();

console.log('auht ke router tak pouch gya')

todoRoutes.post('/', addTodo)



export {todoRoutes}