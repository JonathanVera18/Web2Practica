import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UseGuards } from '@nestjs/common';
import { WsAuthGuard } from 'src/auth/ws-auth.guard';

@WebSocketGateway({cors:true})
export class SerieGateway {
  @WebSocketServer() wss:Server;
  private userConnections: Map<string, Set<string>> = new Map();

  constructor(private readonly serieService: SerieService) {}

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

  @SubscribeMessage('agregar-serie')
  async handleAgregarSerie(@MessageBody() data: CreateSerieDto, @ConnectedSocket() client: Socket) {
    const nuevaSerie = await this.serieService.create(data);
    this.wss.emit('nueva-serie', nuevaSerie);

    // Usar client para enviar confirmación de recepción al cliente que envió el mensaje
    client.emit('serie-recibida', { status: 'success', data: nuevaSerie });

    return nuevaSerie;
  }

  @SubscribeMessage('consultar-series')
  async handleConsultarSeries(@ConnectedSocket() client: Socket) {
    const seriesActivas = await this.serieService.findAll();

    // Enviar la lista de series activas al cliente que consultó
    client.emit('lista-series', seriesActivas);

    return seriesActivas;
  }
}
