import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {JoinRequestDto} from "./dto/join.request.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @ApiOperation({ summary: '내 정보 조회' })
    @Get()
    getUsers(@Req() req){
        return req.user;
    }

    @ApiOperation({ summary: '회원가입' })
    @Post()
    postUsers(@Body() data: JoinRequestDto){
        return this.usersService.postUsers(data.email, data.nickname, data.password);
    }

    @ApiOperation({ summary: '로그인' })
    @Post('login')
    login(){

    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logout(@Req() req, @Res() res){
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly: true});
        res.send('ok');
    }
}
