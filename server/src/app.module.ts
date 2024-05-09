import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weatherApi/weather.module';
import {DatabaseModule} from './db/database.module';
import {CatsModule} from './cats/cats.module';


@Module({
  imports: [WeatherModule, DatabaseModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
