import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Injectable } from '@nestjs/common';

@Injectable()
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private connectedUsers: Record<string, string> = {}; // Track connected users

  // Client connected
  handleConnection(client: Socket) {
<<<<<<< HEAD
    console.log('Client connected:', client.id);
=======
    console.log(`Foydalanuvchi ulanmoqda: ${client.id}`
    )
>>>>>>> c48f9f518f42df29a47d3cceea0d387a9c4526a4
  }

  // Client disconnected
  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    delete this.connectedUsers[client.id];
    this.server.emit('user_disconnected', { userId: client.id });
  }

  // Handle user typing event
  @SubscribeMessage('typing')
  handleTyping(@MessageBody() data: { user: string }, @ConnectedSocket() client: Socket): void {
    this.server.emit('typing', { user: data.user });
  }

  // Handle user joining a group
  @SubscribeMessage('join_group')
  handleJoinGroup(@MessageBody() data: { groupId: string; user: string }, @ConnectedSocket() client: Socket): void {
    client.join(data.groupId); // Join specific room/group
    this.connectedUsers[client.id] = data.user;

    // Notify other users in the group
    this.server.to(data.groupId).emit('messages', {
      message: `${data.user} has joined the group`,
      type: 'joined',
      userId: client.id,
    });

    // Notify the client itself that they have successfully joined
    client.emit('joined', { id: client.id });
  }

  // Handle incoming chat messages
  @SubscribeMessage('messages')
  handleMessage(
    @MessageBody() data: { message: string; userId: string },
    @ConnectedSocket() client: Socket
  ): void {
    const groupId = Object.keys(client.rooms).filter((room) => room !== client.id)[0]; // Get the room the client is in

    if (groupId) {
      const createdAt = new Date().toLocaleTimeString();
      this.server.to(groupId).emit('messages', {
        message: data.message,
        userId: data.userId,
        createdAt,
        user: { name: this.connectedUsers[client.id] || 'Unknown' }, // Attach user info
        type: 'message',
      });
    }
  }
}
