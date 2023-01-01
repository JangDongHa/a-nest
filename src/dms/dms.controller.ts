import {Controller, Get, Param, Post, Query} from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
    @Get(':id/chats')
    getChats(@Query() query, @Param() params){
        console.log(query.perPage, query.page);
        console.log(params.url, params.id);
    }

    @Post(':id/chats')
    postChats(){

    }
}
