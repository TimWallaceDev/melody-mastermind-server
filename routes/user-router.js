import express from 'express'

export const userRouter = express.Router()

import { createUser } from '../controllers/user-controller.js'

//create user
userRouter.route("/").post(createUser)