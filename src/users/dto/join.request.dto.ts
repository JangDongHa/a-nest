import {ApiProperty} from "@nestjs/swagger";

export class JoinRequestDto{
    @ApiProperty({
        example: 'jdh3340@naver.com',
        description: '이메일',
        required: true
    })
    public email: string

    @ApiProperty({
        example: '동ㅎr',
        description: '닉네임',
        required: true,
        minLength: 2,
        maxLength: 10
    })
    public nickname: string

    @ApiProperty({
        example: 'password1234!@',
        description: '비밀번호',
        required: true
    })
    public password: string
}