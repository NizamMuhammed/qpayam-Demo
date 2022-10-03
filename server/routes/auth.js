import express from "express"
import { register } from "../controllers/auth.js"

const routes = express.Router()

routes.post("/register", register) //The register function is a controller

export { routes }
