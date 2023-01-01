import { Injectable } from '@nestjs/common';
import * as process from "process";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {
  }

  async getHello() {
    return this.configService.get('NAME');
  }

  getUser(): string {
    return 'this is user'
  }
}
