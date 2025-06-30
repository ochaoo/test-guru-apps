import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './common/logging.interceptor';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new LoggingInterceptor());
    app.enableShutdownHooks();

    const port = process.env.PORT ?? 4000;
    await app.listen(port);
    Logger.log(`Gateway is running on http://localhost:${port}`);
}
bootstrap();
