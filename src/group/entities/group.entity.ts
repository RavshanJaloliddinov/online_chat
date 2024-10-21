import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { GroupOfUser } from "src/group_of_user/entities/group_of_user.entity";
import { Message } from "src/message/entities/message.entity";
import { User } from "src/user/models";


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
    
    @Column({ type: DataType.INTEGER, unique: true })
    group_admin: number


    @HasMany(() => Message)
    messages: Message[]

    @HasMany(()=>GroupOfUser)
    users: GroupOfUser[]

    

}
