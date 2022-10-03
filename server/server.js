import express from "express"
import { routes as authRoute } from "./routes/auth.js" //import Auth routes
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

app.use(morgan("dev"))
app.use(bodyParser.json())
//app.use(cors()) //accept api calls from all domains
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
) //accept API calls from client only
app.use("/api", authRoute) //endpoint starts with '/api/

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}...`))
