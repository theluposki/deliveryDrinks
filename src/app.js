import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import Auth from './routes/Users/Auth.js'


const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(morgan('tiny'))

app.use(Auth)

app.listen( PORT, () => {
    console.log(`Serve listen in < http://localhost:${PORT} >`)
})
