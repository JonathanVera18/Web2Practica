import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UseGuards } from '@nestjs/common';
import { WsAuthGuard } from 'src/auth/ws-auth.guard';

@WebSocketGateway({cors:true})
export class AsignacionGateway {
  @WebSocketServer() wss: Server;
  private userConnections: Map<string, Set<string>> = new Map();

  constructor(private readonly asignacionService: AsignacionService) {}

  @UseGuards(WsAuthGuard)
  handleConnection(client: Socket) {
    const userId = client.handshake.headers.userId as string;
    if (!this.userConnections.has(userId)) {
      this.userConnections.set(userId, new Set());
    }
    const connections = this.userConnections.get(userId);
    if (connections.size >= 3) {
      client.disconnect();
      return false;
    }
    connections.add(client.id);
    return true;
  }

  handleDisconnect(client: Socket) {
    const userId = client.handshake.headers.userId as string;
    const connections = this.userConnections.get(userId);
    if (connections) {
      connections.delete(client.id);
      if (connections.size === 0) {
        this.userConnections.delete(userId);
      }
    }
  }

  @SubscribeMessage('agregar-transaccion')
  async handleAgregarTransaccion(@MessageBody() data: CreateAsignacionDto, @ConnectedSocket() client: Socket) {
    const nuevaAsignacion = await this.asignacionService.create(data);
    this.wss.emit('nueva-transaccion', nuevaAsignacion);

    // Usar client para enviar confirmación de recepción al cliente que envió el mensaje
    client.emit('transaccion-recibida', { status: 'success', data: nuevaAsignacion });

    return nuevaAsignacion;
  }

  @SubscribeMessage('consultar-activos')
  async handleConsultarActivos(@ConnectedSocket() client: Socket) {
    const asignacionesActivas = await this.asignacionService.findAll('Activo');

    // Enviar la lista de transacciones activas al cliente que consultó
    client.emit('lista-transacciones', asignacionesActivas);

    return asignacionesActivas;
  }
}
