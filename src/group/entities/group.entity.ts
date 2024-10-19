import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table({tableName: 'group', timestamps: true})
export class Group extends Model{
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.STRING, allowNull: true})
    image: string
   
    @Column({type: DataType.TEXT, allowNull: true})
    description: string

    @Column({type: DataType.STRING, unique: true})
    link: string
}
