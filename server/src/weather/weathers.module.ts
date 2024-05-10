import { Module } from '@nestjs/common';
import { WeatherController } from './weathers.controller';
import { WeatherModelService } from './weathers.service';
import { weatherProviders } from './weathers.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WeatherController],
  providers: [WeatherModelService, ...weatherProviders],
  exports: [WeatherModelService],
})
export class WeatherModule {}
