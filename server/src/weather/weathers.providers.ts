import { WeatherModel } from './weathers.model';

export const weatherProviders = [
  {
    provide: 'WEATHERS_REPOSITORY',
    useValue: WeatherModel,
  },
];
