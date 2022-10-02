import express from "express"

const routes = express.Router()

routes.get("/register", (req, res) => {
  res.json({
    data: "You just hit the Register endpoint",
  })
})

export default routes
