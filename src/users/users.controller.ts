import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {JoinRequestDto} from "./dto/join.request.dto";
import {UsersService} from "./users.service";

@Controller('api/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }
    @Get()
    getUsers(@Req() req){
        return req.user;
    }

    @Post()
    postUsers(@Body() data: JoinRequestDto){
        return this.usersService.postUsers(data.email, data.nickname, data.password);
    }

    @Post('login')
    login(){

    }

    @Post('logout')
    logout(@Req() req, @Res() res){
        req.logOut();
        res.clearCookie('connect.sid', {httpOnly: true});
        res.send('ok');
    }
}
