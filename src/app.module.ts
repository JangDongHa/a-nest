import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {LoggerMiddleware} from "./middlewares/logger.middleware";
import { UsersModule } from './users/users.module';
import { ChannelsModule } from './channels/channels.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { DmsModule } from './dms/dms.module';
import {DatabaseModule} from "./database/database.module";

const getENV = async () => {
  return {
    NAME: 'jdh3340',
    PASSWORD: '1234'
  }
}
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [getENV]}), UsersModule, ChannelsModule, WorkspacesModule, DmsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ConfigService, {
    provide: 'testValue',
    useValue: 'testVal'
  }],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
