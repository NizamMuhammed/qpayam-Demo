import express from "express"
import { register } from "../controllers/auth.js"

const routes = express.Router()

routes.get("/register", register) //The register function is a controller

export default routes
