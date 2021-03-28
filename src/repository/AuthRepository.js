import User from "../models/UserModel"

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const authConfig = require("../config/auth.json");

const generateToken = async (id) => {
  const token = await jwt.sign({ 
    id
  }, authConfig.secret, {
    expiresIn: 86400,
  });
  return token;
};

const findEmailPassword = async (email) => {
  return await User.findOne({ email }).select("+password");
};

/** Criar Usuário */
export const register = async (body) => {
  return await User.create(body);
};

/** Autenticar Usuário */
export const auth = async (email, password) => {
  const user = await findEmailPassword(email);

  if (!user) {
    return { error: "Usuario não existe." };
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return { error: "Senha inválida." };
  }

  //user.password = undefined
  return { user, token: await generateToken(user.id) }
}
