
import { Column, DataType, Table, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Group } from "src/group/entities/group.entity";
import { User } from "src/user/models";

export enum MessageType {
    message = "message",
    joined = "joined" 
}
@Table({tableName: 'message', timestamps: true})

export class Message extends Model<Message>{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;


    @ForeignKey(() => Group)
    @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE", onUpdate: "NO ACTION" })


    @Column({ type: DataType.NUMBER, allowNull: false })

    chat_id: number
    @BelongsTo(() => Group)
    group: Group


    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, allowNull: false, onDelete: "CASCADE", onUpdate: "NO ACTION" })

    @Column({ type: DataType.NUMBER, allowNull: false })

    user_id: number
    @BelongsTo(() => User)
    user: User

    @Column({ type: DataType.STRING, allowNull: false })
    text: string

    @Column({ type: DataType.STRING, allowNull: true, defaultValue: 'image.png' })
    image?: string


    @Column({type: DataType.ENUM(MessageType.joined,MessageType.message), defaultValue: MessageType.message})
    message_type: string

   

}
