import express from 'express'
import dotenv from 'dotenv'
import { authRoutes } from './routes/authRoutes.js';
import { connectDB } from './utils/connectDB.js';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();


app.use('/auth',authRoutes)


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server chal raha hai " + PORT + " per")
})