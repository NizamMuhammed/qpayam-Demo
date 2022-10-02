import express from "express"

const app = express()
/* Express is the Request-Response Handler
 * 'app' is an Express App
 * nodemon is used to restart the server after each change
 */

app.get("/api/register", (req, res) => {
  res.json({
    data: "You just hit the Register endpoint",
  })
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server running on port ${port}...`))
