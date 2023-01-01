import {ApiProperty} from "@nestjs/swagger";
import {JoinRequestDto} from "../../users/dto/join.request.dto";

export class UserDto extends JoinRequestDto{
    @ApiProperty({
        name: 'userId',
        example: 1,
        description: 'User id',
        required: true
    })
    public userId: number;
}