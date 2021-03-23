import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'nest is awesome',
      resave: true,
      saveUninitialized: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
