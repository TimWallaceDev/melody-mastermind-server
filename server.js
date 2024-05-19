import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { tokenRouter } from "./routes/token-router.js"
import { scoreRouter } from "./routes/score-router.js"
import { userRouter } from './routes/user-router.js'
import { accountRouter } from './routes/account-router.js'
import { playlistRouter } from './routes/playlist-router.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())

app.use("api/token", tokenRouter)

app.use("api/scores", scoreRouter)

app.use("api/users", userRouter)

app.use("api/account", accountRouter)

app.use("api/playlists", playlistRouter)


app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}/api`);
})
