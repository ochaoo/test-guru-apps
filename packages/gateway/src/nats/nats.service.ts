import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { connect, JetStreamClient, JSONCodec, NatsConnection } from 'nats';

@Injectable()
export class NatsService implements OnModuleInit, OnModuleDestroy {
    private nc!: NatsConnection;
    private js!: JetStreamClient;
    private codec = JSONCodec();

    async onModuleInit() {
        this.nc = await connect({ servers: process.env.NATS_URL || 'nats://localhost:4222' });
        this.js = this.nc.jetstream();
    }

    async publish(subject: string, data: unknown) {
        const payload = this.codec.encode(data);
        await this.js.publish(subject, payload);
    }

    async onModuleDestroy() {
        await this.nc.drain();
    }
}
