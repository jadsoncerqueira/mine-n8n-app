import jwt, { SignOptions } from 'jsonwebtoken';
import { IPayload } from '../interface/user.interface.js';


const JWT_SECRET = process.env.SECRET_KEY_JWT as string;

export function createToken(payload: IPayload): string {
  const options: SignOptions = {
    algorithm: 'HS256',
    expiresIn: '365d',
  };

  return jwt.sign(payload, JWT_SECRET, options);
}
export function verifyToken(token: string): IPayload {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as IPayload;

    // Verifica expiração manualmente (opcional, pois jwt.verify já faz isso)
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      throw new Error('Token expirado');
    }

    return decoded;
  } catch (error) {
    throw new Error(`Token inválido ou expirado: ${(error as Error).message}`);
  }
}
