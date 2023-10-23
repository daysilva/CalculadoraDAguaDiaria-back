import Express from 'express'
import { testController } from "../controllers/testController.js";
import { getPerson, registerPerson } from '../controllers/personController.js';

const router = Express.Router()

router.get('/test', testController)

router.post('/cadastrar', registerPerson)
router.get('/listar', getPerson)


export default router