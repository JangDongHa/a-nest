import {Controller, Get, Inject, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              @Inject('testValue') private readonly testValue
              ) {}

  @Get()
  getHello() {
    console.log(this.testValue)
    return this.appService.getHello();
  }

  @Get('user')
  getUser(): string {
    const user = this.appService.getUser();
    return user;
  }
}

function generateResponse(data) {
  return {
    user: 'user',
    data: data
  }
}
