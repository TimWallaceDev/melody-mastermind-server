import express from 'express'
import cors from 'cors'
require("dotenv").config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())


app.listen()