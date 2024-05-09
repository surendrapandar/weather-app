import { Injectable, Inject } from '@nestjs/common';
import { Cat } from './cat.entity';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat
  ) {}

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>();
  }

  async create(): Promise<any> {
    return this.catsRepository.create({
        name: "xyz",
        age: 30,
        breed: "unknown",
        // country: "india"
    })
  }
}