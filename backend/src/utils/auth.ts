import jwt, { SignOptions } from 'jsonwebtoken';
import { IPayload } from '../interface/user.interface.js';

const secretKey = process.env.SECRET_KEY_JWT_GOOGLE as unknown as string;

if (!secretKey) {
  throw new Error("A chave secreta JWT (SECRET_KEY_JWT_GOOGLE) não está definida.");
}


// Função para gerar o token
export function generateToken(payload: IPayload, expiresIn: SignOptions['expiresIn'] = '1h'): string {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, secretKey, options);
}

// Função para verificar e decodificar o token
export function verifyToken(token: string): IPayload | null {
  try {
    const decoded = jwt.verify(token, secretKey) as IPayload;
    return decoded;
  } catch (erro) {
    return null;
  }
}
