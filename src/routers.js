import Express from 'express'
import { testController } from "../controllers/testController.js";

const router = Express.Router()

router.get('/test', testController)

export default router