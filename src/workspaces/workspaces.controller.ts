import {Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('WORKSPACES')
@Controller('api/workspaces')
export class WorkspacesController {
    @Get()
    getMyWorkspaces(){

    }
    @Post() // body in here
    createWorkspaces(){

    }

    @Get(':workspaces/workspace/members')
    getAllMembersInWorkspace(@Param() params){

    }

    @Post(':workspaces/members')
    inviteMemberInWorkspace(@Param() params){

    }

    @Delete(':workspaces/members/:id')
    kickMemberInWorkspace(@Param() params){

    }

}
