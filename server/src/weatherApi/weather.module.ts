import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { WeatherModule } from 'src/weather/weathers.module';

@Module({
  imports: [
    WeatherModule
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherApiModule {}
