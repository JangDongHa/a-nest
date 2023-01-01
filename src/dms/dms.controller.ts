import {Controller, Get, Param, Post, Query} from '@nestjs/common';
import {ApiParam, ApiQuery, ApiTags} from "@nestjs/swagger";

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {

    @ApiParam({
        name: 'id',
        required: true,
        description: '사용자 id'
    })
    @ApiParam({
        name: 'url',
        required: true,
        description: '워크스페이스 URL'
    })
    @ApiQuery({
        name: 'perPage',
        required: true,
        description: '한 번에 가져오는 갯수'
    })
    @ApiQuery({
        name: 'page',
        required: true,
        description: '불러올 페이지'
    })
    @Get(':id/chats')
    getChats(@Query() query, @Param() params){
        console.log(query.perPage, query.page);
        console.log(params.url, params.id);
    }

    @Post(':id/chats')
    postChats(){

    }
}
