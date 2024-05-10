import { Injectable, Inject } from '@nestjs/common';
import { WeatherModel } from './weathers.model';

@Injectable()
export class WeatherModelService {
  constructor(
    @Inject('WEATHERS_REPOSITORY')
    private weathersrepository: typeof WeatherModel,
  ) {}

  async create(city: string, temp: number): Promise<any> {
    return this.weathersrepository.create({
      city: city,
      temperature: temp,
    });
  }
}
