import express from "express"
import { register } from "../controllers/auth.js"
import userRegisterValidator from "../validators/auth.js"
import runValidation from "../validators/index.js"

const routes = express.Router()

routes.post("/register", userRegisterValidator, runValidation, register) //The register function is a controller

export { routes }
