import { register } from "../repository/AuthRepository"

export const Auth = (req, res) => {
    res.status(200).json({ auth: true })
}

export const Register = async (req, res) => {
    const body = req.body
    try {
        const result = await register(body)
        res.status(201).json({ register: true, result })
    } catch (error) {
        res.status(400).json({ error: `Erro ao registrar o usuário > [${error}]` })
    }
}
