import express from "express"
import routes from "./routes/auth.js" //import Auth routes
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()
/* Express is the Request-Response Handler
 * 'app' is an Express App
 * nodemon is used to restart the server after each change
 */

//Middlewares

app.use("/api", routes) //endpoint starts with '/api/
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}...`))
