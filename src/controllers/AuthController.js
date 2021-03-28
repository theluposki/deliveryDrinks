export const Auth = (req, res) => {
    res.status(200).json({ auth: true })
}

export const Register = (req, res) => {
    res.status(201).json({ register: true })
}
