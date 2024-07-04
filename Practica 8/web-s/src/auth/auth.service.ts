// auth.service.ts

import * as jwt from 'jsonwebtoken';

export function verifyToken(token: string): boolean {
  try {
    // Verifica el token (decodifica, verifica firma, etc.)
    // Aquí debes usar tu lógica real para validar el token
    const secret = '1234'; // Cambia esto por tu secreto real
    jwt.verify(token, secret); // Verifica el token directamente

    // Si llegamos aquí, el token es válido
    return true;
  } catch (error) {
    // Maneja errores (por ejemplo, token inválido, expirado, etc.)
    return false;
  }
}
