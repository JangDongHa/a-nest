import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {JoinRequestDto} from "./dto/join.request.dto";
import {UsersService} from "./users.service";
import {ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserDto} from "../common/dto/user.dto";
import {User} from "../common/decorator/user.decorator";

@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @ApiOkResponse({
        description: '성공',
        type: UserDto
    })
    @ApiInternalServerErrorResponse({
        description: '서버 에러'
    })
    @ApiOperation({ summary: '내 정보 조회' })
    @Get()
    getUsers(@User() user){
        return user;
    }

    @ApiOperation({ summary: '회원가입' })
    @Post()
    postUsers(@Body() data: JoinRequestDto){
        return this.usersService.postUsers(data.email, data.nickname, data.password);
    }

    @ApiOkResponse({
        description: '성공',
        type: UserDto
    })
    @ApiOperation({ summary: '로그인' })
    @Post('login')
    login(@User() user){
        return user;
    }

    @ApiOperation({ summary: '로그아웃' })
    @Post('logout')
    logout(@Req() req, @Res() res){
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly: true});
        res.send('ok');
    }
}
