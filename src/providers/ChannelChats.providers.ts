import { DataSource } from 'typeorm';
import {ChannelChats} from "../entities/channelChats";

export const photoProviders = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ChannelChats),
        inject: ['DATA_SOURCE'],
    },
];