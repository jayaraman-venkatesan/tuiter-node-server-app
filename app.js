import express from 'express';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb+srv://jayvenkat:Varshajayaram1998@cluster0.sobsvog.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_STRING);

const app = express()

app.use(cors())
app.use(express.json());

HelloController(app)
UserController(app)
TuitsController(app);

app.get('/', (req, res) => { res.send('Welcome to Full Stack Development!') })
app.listen(process.env.PORT || 4000)