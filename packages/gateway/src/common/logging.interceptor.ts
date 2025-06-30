import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { randomUUID } from 'crypto';

interface IRequestWithCorrelationId extends Request {
    correlationId: string;
}

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        const req = context.switchToHttp().getRequest<IRequestWithCorrelationId>();
        const correlationId = (req.headers['x-correlation-id'] as string) || randomUUID();

        req.correlationId = correlationId;

        Logger.log(`[${correlationId}] Request: ${req.method} ${req.url}`);

        return next.handle().pipe(
            tap(() => {
                Logger.log(`[${correlationId}] Completed: ${req.method} ${req.url}`);
            }),
        );
    }
}
