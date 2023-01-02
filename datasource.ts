import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { ChannelChats } from './src/entities/channelChats';
import { ChannelMembers } from './src/entities/channelMembers';
import { Channels } from './src/entities/channels';
import { DMs } from './src/entities/dMs';
import { Mentions } from './src/entities/mentions';
import { Users } from './src/entities/users';
import { WorkspaceMembers } from './src/entities/workspaceMembers';
import { Workspaces } from './src/entities/workspaces';

dotenv.config();

const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        __dirname + '/src/entities/*{.ts,.js}',
    ],
    charset: 'utf8mb4_general_ci',
    synchronize: false,
    logging: true,
});

export default dataSource;
