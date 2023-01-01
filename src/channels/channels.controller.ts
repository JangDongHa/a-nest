import {Controller, Get, Param, Post, Query} from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
    @Get()
    getAllChannels(){

    }

    @Get(':name')
    getSpecificChannel(){

    }

    @Post()
    createChannel(){

    }
    @Get(':name/chats')
    getChats(@Query() query, @Param() params){
        console.log(query.perPage, query.page);
        console.log(params.url, params.id);
    }

    @Post(':name/members')
    inviteAllMembers(){

    }

    @Get(':name/members')
    getAllMembers(){

    }
}
