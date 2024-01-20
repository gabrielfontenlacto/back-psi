import {Router} from 'express'
import { getPing } from "../controller/index.controller.js"
const router = Router()

router.get('/ping' , getPing)

export default router