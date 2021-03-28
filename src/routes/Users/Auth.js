import express from 'express'

const router = express.Router()

import { Auth, Register } from '../../controllers/AuthController.js'

router.post('/auth', Auth)

router.post('/register', Register)

export default router
