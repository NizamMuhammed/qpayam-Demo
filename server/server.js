import express from "express"
import routes from "./routes/auth.js" //import Auth routes

const app = express()
/* Express is the Request-Response Handler
 * 'app' is an Express App
 * nodemon is used to restart the server after each change
 */

//Middlewares

app.use("/api", routes) //endpoint starts with '/api/

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}...`))
