import {Injectable, Logger, NestMiddleware} from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    private logger = new Logger('HTTP'); // HTTP : context 부여 (http 관련된 것)

    /*
    실행 순서
    1. ip, method, originUrl, userAgent 받기
    2. next()
    3. 응답이 끝났을 때 res.on 실행 (비동기)
     */
    use(req: any, res: any, next: (error?: any) => void): any {
        const { ip, method, originUrl } = req
        const userAgent = req.get('user-agent') || ''

        res.on('finish', () => { // finish = 응답이 끝났을 때
            const { statusCode } = res
            const contentLength = res.get('content-length')
            this.logger.log(`method : ${method}`)
            this.logger.log(`ip : ${ip}`)
            this.logger.log(`originUrl : ${originUrl}`)
            this.logger.log(`userAgent : ${userAgent}`)
            this.logger.log(`statusCode : ${statusCode}`)
            this.logger.log(`contentLength : ${contentLength}`)
        })

        next()
    }

}