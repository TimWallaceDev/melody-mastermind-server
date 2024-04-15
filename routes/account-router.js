import express from 'express'
import { getAccountInfo } from '../controllers/account-controller.js'

export const accountRouter = express.Router()

accountRouter.route("/:username").get(getAccountInfo)