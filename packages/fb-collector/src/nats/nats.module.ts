import { Module } from '@nestjs/common';
import { NatsService } from './nats.service';

@Module({
    providers: [NatsService],
    controllers: [],
    exports: [NatsService],
})
export class NatsModule {}
