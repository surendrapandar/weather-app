import { Injectable } from "@nestjs/common";
import {Request} from "express"

@Injectable()
export class WeatherService {
    
  async getWeather(request: Request) {
      const city = request.body.city;
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=30acf49e18d13a1d4e0fcf0ed217b4b2`);
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
}