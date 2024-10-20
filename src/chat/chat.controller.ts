import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { UserService } from 'src/user/user.service'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatController implements OnGatewayConnection, OnGatewayDisconnect {


  constructor(private readonly userService: UserService) { }

  @WebSocketServer()
  server: Server

  handleConnection(client: Socket) {
    console.log(`Foydalanuvchi ulanmoqda: ${client.id}`

    )
  }

  handleDisconnect(client: Socket) {
    console.log(`Foydalanuvchi uzildi: ${client.id}`)
  }

  @SubscribeMessage('join')
  handleJoin(client: Socket, username: string): void {
    client.data.username = username
    this.server.emit('chat message', `${username} chatga qo'shildi`)
  }

  @SubscribeMessage('chat message')
  handleMessage(client: Socket, message: string): void {
    const username = client.data.username || 'Anonim'
    this.server.emit('chat message', `${username}: ${message}`)
  }

  @SubscribeMessage('typing')
  handleTyping(client: Socket): void {
    const username = client.data.username || 'Anonim'
    client.broadcast.emit('typing', `${username} yozmoqda...`)
  }
}
