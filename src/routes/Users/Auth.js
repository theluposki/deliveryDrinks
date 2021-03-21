import express from 'express'

const router = express.Router()

router.post('/auth', (req, res) => {
    res.status(200).json({ auth: true })
})

router.post('/register', (req, res) => {
    res.status(201).json({ register: true })
})

export default router
