import express from 'express'
const router = express.Router()
import * as userController from '../controllers/user-controller.js'

router.get('/',userController.sayHi)
router.post('/user',userController.userData)

export default router