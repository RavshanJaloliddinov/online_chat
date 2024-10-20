import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({tableName: 'message', timestamps: true})
export class Message extends Model{
    @Column({type: DataType.STRING, allowNull: false})
    chat_id: number

    @Column({type: DataType.STRING, allowNull: false})
    user_id: number

    @Column({type: DataType.TEXT, allowNull: false})
    text: string

    @Column({type: DataType.STRING, allowNull: true})
    image?: string
}
