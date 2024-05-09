import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'weather'})
export class WeatherModel extends Model {
    @Column
    city: string;

    @Column(DataType.FLOAT)
    temperature: number;

}