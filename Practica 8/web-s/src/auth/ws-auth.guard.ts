import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import {verifyToken} from './auth.service';

@Injectable()
export class WsAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const client = context.switchToWs().getClient();
    const headers = client.handshake.headers;

    // Obtén el token del encabezado
    const token = headers.authorization?.split(' ')[1];

    // Verifica el token (usando tu función real)
    const isValidToken = verifyToken(token);

    return isValidToken;
  }
}
