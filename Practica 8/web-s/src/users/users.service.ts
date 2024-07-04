import { Injectable } from '@nestjs/common';

interface User {
  id: string;
  sockets: string[];
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  addUser(userId: string, socketId: string): boolean {
    const user = this.users.find(user => user.id === userId);
    if (user) {
      if (user.sockets.length >= 3) {
        return false; // No permitir más de 3 conexiones
      }
      user.sockets.push(socketId);
    } else {
      this.users.push({ id: userId, sockets: [socketId] });
    }
    return true;
  }

  removeUser(socketId: string) {
    for (const user of this.users) {
      const index = user.sockets.indexOf(socketId);
      if (index !== -1) {
        user.sockets.splice(index, 1);
        if (user.sockets.length === 0) {
          this.users = this.users.filter(u => u.id !== user.id);
        }
        return;
      }
    }
  }

  getUserBySocketId(socketId: string): User | undefined {
    return this.users.find(user => user.sockets.includes(socketId));
  }
}
