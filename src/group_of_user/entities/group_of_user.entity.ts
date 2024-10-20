import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Group } from "src/group/entities/group.entity";
import { User } from "src/user/models";

@Table({ tableName: 'GroupOfUser', timestamps: true })
export class GroupOfUser extends Model<GroupOfUser> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number

    @ForeignKey(() =>Group)
    @Column({ type: DataType.BIGINT, allowNull: false, onDelete: "CASCADE", onUpdate: "NO ACTION" })
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    group_id: number
    
    @BelongsTo(() =>Group)
    group: Group

    
    @ForeignKey(() =>User)
    @Column({ type: DataType.BIGINT, allowNull: false, onDelete: "CASCADE", onUpdate: "NO ACTION" })
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user_id: number

    @BelongsTo(()=>User)
    user: User


    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_admin: boolean




}
