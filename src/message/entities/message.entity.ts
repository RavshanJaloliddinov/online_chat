
import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({tableName: 'message', timestamps: true})
export class Message extends Model<Message>{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;
    
    @Column({type: DataType.STRING, allowNull: false})
    chat_id: number

    @Column({type: DataType.STRING, allowNull: false})
    user_id: number

    @Column({type: DataType.STRING, allowNull: false})
    text: string

    @Column({type: DataType.STRING, allowNull: true})
    image?: string
}
