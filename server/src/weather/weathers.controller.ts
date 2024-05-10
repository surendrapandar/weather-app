import { Controller, Get, Post } from '@nestjs/common';
import { WeatherModelService } from './weathers.service';

@Controller('weatherwriter')
export class WeatherController {
  constructor(private readonly weatherService: WeatherModelService) {}
  @Post()
  create() {
    return this.weatherService.create("jaipur", 20);
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
