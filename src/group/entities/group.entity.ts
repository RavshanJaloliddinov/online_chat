import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { Message } from "src/message/entities/message.entity";

@Table({ tableName: 'group', timestamps: true })
export class Group extends Model<Group>{

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string

    @Column({ type: DataType.STRING, allowNull: true })
    image: string

    @Column({ type: DataType.STRING, allowNull: true })
    description: string

    @Column({ type: DataType.STRING, unique: true })
    link: string

    @HasMany(() => Message)
    messages: Message[]
}
