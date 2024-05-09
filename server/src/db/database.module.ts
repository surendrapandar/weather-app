import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import {Cat} from "../cats/cat.entity"
import { WeatherModel } from 'src/weather/weather.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'somePassword',
      database: 'weather',
      models: [Cat, WeatherModel],
    }),
  ],
})
export class DatabaseModule {}