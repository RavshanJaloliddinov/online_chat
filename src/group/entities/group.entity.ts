import { Column, DataType, Table, Model } from "sequelize-typescript";

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
}
