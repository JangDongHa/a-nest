import {createParamDecorator, ExecutionContext} from "@nestjs/common";

// ctx : 실행 컨텍스트
export const User = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
})