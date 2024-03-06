require("dotenv").config()
require("./database/index")
require("./database/syncModels")
const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))