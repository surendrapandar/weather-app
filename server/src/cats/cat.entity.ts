import { Table, Column, Model } from 'sequelize-typescript';

interface Cats {
name:string;
age: number;
breed: string;

}
@Table
export class Cat extends Model<Cats> {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}