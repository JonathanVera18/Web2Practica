import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { UsersService } from '../users/users.service';
import { CreateAsignacionDto } from '../asignacion/dto/create-asignacion.dto';
import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@WebSocketGateway({cors:true})
export class PersonajeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  constructor(
    private usersService: UsersService,
    @InjectRepository(Asignacion)
    private asignacionRepository: Repository<Asignacion>,
  ) {}

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.usersService.removeUser(client.id);
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('agregar-transaccion')
  async handleTransaction(
    @MessageBody() transaction: CreateAsignacionDto,
    @ConnectedSocket() client: Socket
  ) {
    // Insertar transacción en la base de datos
    const newTransaction = this.asignacionRepository.create(transaction);
    await this.asignacionRepository.save(newTransaction);

    // Replicar la transacción a todos los clientes conectados
    this.wss.emit('nueva-transaccion', newTransaction);

    // Usar client para enviar confirmación de recepción al cliente que envió el mensaje
    client.emit('transaccion-recibida', { status: 'success', data: newTransaction });
  }

  @SubscribeMessage('consultar-personajes')
  async handleActiveTransactions(@ConnectedSocket() client: Socket) {
    // Obtener transacciones activas de la base de datos
    const activeTransactions = await this.asignacionRepository.find({ where: { estado: 'Activo' } });

    // Enviar la lista de transacciones activas al cliente que consultó
    client.emit('lista-transacciones', activeTransactions);
  }
}
