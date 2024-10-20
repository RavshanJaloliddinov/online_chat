
import { DataType, Column, Table, Model, ForeignKey, BelongsTo, HasOne, HasMany } from "sequelize-typescript";
import { GroupOfUser } from "src/group_of_user/entities/group_of_user.entity";
import { Message } from "src/message/entities/message.entity";


@Table({ tableName: 'User', timestamps: true })
export class User extends Model<User> {
    @Column({ type: DataType.STRING, allowNull: false })
    full_name: string

    @Column({ type: DataType.STRING, allowNull: false })
    email: string

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: "userimage.jpg" })
    image: string

    @Column({ type: DataType.STRING, allowNull: false })
    password: string

    @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
    status: boolean


    @HasOne(()=>Message)
    user: User

    @HasMany(()=>GroupOfUser)
    group: GroupOfUser[]
    



} 