import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { connect, JSONCodec, JetStreamClient, NatsConnection, consumerOpts } from 'nats';

@Injectable()
export class NatsService implements OnModuleInit, OnModuleDestroy {
    private nc!: NatsConnection;
    private js!: JetStreamClient;
    private codec = JSONCodec();

    async onModuleInit() {
        this.nc = await connect({ servers: process.env.NATS_URL || 'nats://nats:4222' });
        this.js = this.nc.jetstream();
        console.log('[NATS] Connected');
    }

    async subscribe(subject: string, callback: (data: unknown) => Promise<void>) {
        const opts = consumerOpts();
        opts.durable('fb-collector-durable');
        opts.deliverGroup('fb-collector-group');
        opts.manualAck();
        opts.ackExplicit();

        const sub = await this.js.subscribe('events.facebook', opts);

        console.log(`[NATS] Subscribed to ${subject}`);
        for await (const m of sub) {
            const decoded = this.codec.decode(m.data);
            await callback(decoded);
            m.ack();
        }
    }

    async onModuleDestroy() {
        await this.nc.drain();
    }
}
