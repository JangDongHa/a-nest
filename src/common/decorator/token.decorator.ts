import {ExecutionContext} from "@nestjs/common";

export const Token = ((data: unknown, ctx: ExecutionContext) => {
    const response = ctx.switchToHttp().getResponse();
    return response.locals.jwt;
})

// @Token() token