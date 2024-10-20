import { DataType, Column, Table, Model } from "sequelize-typescript";

@Table({tableName: 'User', timestamps: true})
export class User extends Model<User> {
    @Column({ type: DataType.STRING, allowNull: false })
    full_name: string

    @Column({ type: DataType.STRING, allowNull: false })
    email: string

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: "userimage.jpg" })
    image: string

    @Column({ type: DataType.STRING, allowNull: false })
    password: string
} 