import { Controller, Get, Post } from '@nestjs/common';
import {CatsService} from "./cats.service"

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {
    
  }
  @Post()
  create() {
    return this.catService.create()
    
  }

  @Get()
  findAll(): string { 
    return 'This action returns all cats';
  }


}