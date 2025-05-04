import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.required(),
        TEST_VAR_2: Joi.required(),
      }),
    }),
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CommonModule,
    LoggerModule.forRoot({
      pinoHttp: {
        level: process.env.LOG_LEVEL || 'debug',
        genReqId: function (req, res) {
          console.log('here');
          const existingID = req.id ?? req.headers['x-request-id'];
          console.log('existingId', existingID);
          if (existingID) return existingID;
          const id = crypto.randomUUID();
          console.log('id', id);
          res.setHeader('X-Request-Id', id);
          return id;
        },
        redact: ['req.headers.authorization', 'req.headers["x-api-key"]'],
        transport:
          process.env.NODE_ENV !== 'production'
            ? {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  LevelFirst: false,
                  translateTime: "yyyy-MM-dd'T'HH:mm:ss.l'Z'",
                  messageFormat: '[{context}] {msg}',
                  ignore: 'pid,hostname,context,req,res,responseTime',
                  errorLikeObjectKeys: ['err', 'error'],
                },
              }
            : undefined,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
