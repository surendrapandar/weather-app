import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherApiModule } from './weatherApi/weather.module';
import { WeatherModule } from './weather/weathers.module';
import { DatabaseModule } from './db/database.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [WeatherModule, WeatherApiModule, DatabaseModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
