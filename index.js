import express from 'express'
import dotenv from 'dotenv'
import { authRoutes } from './routes/authRoutes.js';
import { connectDB } from './utils/connectDB.js';
import { todoRoutes } from './routes/todoRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();


app.use('/auth',authRoutes)

app.use('/todo', todoRoutes)



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server chal raha hai " + PORT + " per")
})