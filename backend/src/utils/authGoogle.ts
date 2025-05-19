import jwt, { JwtHeader, SigningKeyCallback } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { IPayload } from '../interface/user.interface.js';
import IGoogleJwtPayload from '../interface/googlePayload.interface.js';

const client = jwksClient({
  jwksUri: 'https://www.googleapis.com/oauth2/v3/certs'
});

function getKey(header: JwtHeader, callback: SigningKeyCallback) {
  client.getSigningKey(header.kid, (err, key) => {
    if (err || !key) {
      callback(err || new Error('Chave de assinatura não encontrada.'));
    } else {
      const publicKey = key.getPublicKey();
      callback(null, publicKey);
    }
  });
}

// Verificar e decodificar token do Google
export async function verifyTokenGooge(token: string | null | undefined): Promise<IPayload | null> {
  if(!token) return null;
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      getKey,
      {
        algorithms: ['RS256'],
        issuer: ['https://accounts.google.com', 'accounts.google.com'],
      },
      (err, decoded) => {
        if (err) {
          console.log(token)
          console.error(err)
          resolve(null);
        } else {
          console.log(decoded)
          const {email, name, picture, sub} = decoded as IGoogleJwtPayload;
          resolve({email, name, picture, google_id: sub} as IPayload);
        }
      }
    );
  });
}

