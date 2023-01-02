import { DataSource } from 'typeorm';
import * as process from "process";
import {Users} from "../entities/users";
import {ChannelChats} from "../entities/channelChats";
import {ChannelMembers} from "../entities/channelMembers";
import {Channels} from "../entities/channels";
import {DMs} from "../entities/dMs";
import {Mentions} from "../entities/mentions";
import {WorkspaceMembers} from "../entities/workspaceMembers";
import {Workspaces} from "../entities/workspaces";

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: process.env.DB_PASSWORD,
                database: 'sleact',
                entities: [
                    ChannelChats,
                    ChannelMembers,
                    Channels,
                    DMs,
                    Mentions,
                    Users,
                    WorkspaceMembers,
                    Workspaces
                ],
                synchronize: false,
                logging: true,
                charset: 'utf8mb4'
            });

            return dataSource.initialize();
        },
    },
];