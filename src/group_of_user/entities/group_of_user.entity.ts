import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'GroupOfUser', timestamps: true })
export class GroupOfUser extends Model<GroupOfUser> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number


    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    group_id: number
 

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number


    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_admin: boolean

}
