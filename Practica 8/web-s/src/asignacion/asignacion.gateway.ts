import { WebSocketGateway, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { AsignacionService } from './asignacion.service';
import { CreateAsignacionDto } from './dto/create-asignacion.dto';
import { UpdateAsignacionDto } from './dto/update-asignacion.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AsignacionGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  private userConnections: { [userId: string]: Set<string> } = {}; // Objeto para rastrear conexiones de usuarios

  constructor(private readonly asignacionService: AsignacionService) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
    
    const userId = client.id; // Simulación de un identificador único

    // Verificamos si el usuario ya tiene 3 conexiones abiertas
    if (this.userConnections[userId] && this.userConnections[userId].size >= 3) {
      client.disconnect(); // Desconectamos al cliente si ya alcanzó el límite
      return;
    }

    // Agregamos la nueva conexión al conjunto de conexiones del usuario
    if (!this.userConnections[userId]) {
      this.userConnections[userId] = new Set();
    }
    this.userConnections[userId].add(client.id);

    console.log(`User ${userId} connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);

    // Obtenemos el userId asociado a este socket
    const userId = client.id; // Simulación de recuperación del userId

    // Removemos la conexión del usuario
    if (this.userConnections[userId]) {
      this.userConnections[userId].delete(client.id);
      if (this.userConnections[userId].size === 0) {
        delete this.userConnections[userId];
      }
    }

    console.log(`User ${userId} disconnected: ${client.id}`);
  }
  @SubscribeMessage('agregar-transaccion')
  handleTransaction(@MessageBody() createAsignacionDto: CreateAsignacionDto) {
    console.log('Received agregar-transaccion event', createAsignacionDto);
    const inserted = this.asignacionService.create(createAsignacionDto);
    console.log('Created asignacion:', inserted);
    this.wss.emit('newAsignacion', inserted);
    return inserted;
  }

  @SubscribeMessage('findAllAsignacion')
  findAll() {
    console.log('Received findAllAsignacion event');
    const asignaciones = this.asignacionService.findAll();
    console.log('Emitting allAsignaciones event', asignaciones);
    this.wss.emit('allAsignaciones', asignaciones);
    return asignaciones;
  }

  @SubscribeMessage('findOneAsignacion')
  findOne(@MessageBody() id: number) {
    console.log('Received findOneAsignacion event', id);
    const asignacion = this.asignacionService.findOne(id);
    console.log('Emitting oneAsignacion event', asignacion);
    this.wss.emit('oneAsignacion', asignacion);
    return asignacion;
  }

  @SubscribeMessage('updateAsignacion')
  update(@MessageBody() updateAsignacionDto: UpdateAsignacionDto) {
    console.log('Received updateAsignacion event', updateAsignacionDto);
    const updated = this.asignacionService.update(updateAsignacionDto.id, updateAsignacionDto);
    console.log('Emitting updatedAsignacion event', updated);
    this.wss.emit('updatedAsignacion', updated);
    return updated;
  }

  @SubscribeMessage('removeAsignacion')
  remove(@MessageBody() id: number) {
    console.log('Received removeAsignacion event', id);
    const removed = this.asignacionService.remove(id);
    console.log('Emitting removedAsignacion event', removed);
    this.wss.emit('removedAsignacion', removed);
    return removed;
  }

  @SubscribeMessage('consultar-activos')
  findAllActivos() {
    console.log('Received consultar-activos event');
    const asignaciones = this.asignacionService.findAll();
    const activos = asignaciones.filter(asignacion => asignacion.estado === 'Activo');
    console.log('Emitting asignacionesActivas event', activos);
    this.wss.emit('asignacionesActivas', activos);
    return activos;
  }
}








