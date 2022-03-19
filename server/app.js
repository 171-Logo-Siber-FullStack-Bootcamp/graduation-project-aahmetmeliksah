const express = require("express")
const { urlencoded } = require('body-parser')
const cors = require('cors')
const helmet = require("helmet")
const dotenv = require('dotenv')
const app = express()
const client = require('./config/dbConfig')
dotenv.config()

// IMPORT ROUTERS, CONTROLLERS, SERVICES 
const router1 = require('./routes/productsRouter')

// MIDDLEWARES 
app.use(urlencoded({ extended: true }))
app.use(express.json()) // body-parser
app.use(cors()) // allow cross platform request/responses
app.use(helmet());

app.use("/", router1)
// LISTEN TO SERVER
const PORT = process.env.PORT || 5000

app.listen(PORT, () => { 
    console.log(`Server started at port ${PORT}`)
    client.connect(console.log(`Database connnected 
    ${process.env.DB_CONNECTION_STRING}`))
  })