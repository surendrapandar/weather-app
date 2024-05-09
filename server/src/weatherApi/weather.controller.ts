import { Controller, Post, Req, Get } from '@nestjs/common';
import { Request } from 'express';
import fetch from 'node-fetch';
import { WeatherService } from './weather.service';

@Controller('getweather')
export class WeatherController {

  constructor(private readonly weatherService: WeatherService){

  }

  @Post()
  getWeather(@Req() req: Request){
    return this.weatherService.getWeather(req)
  }

}
