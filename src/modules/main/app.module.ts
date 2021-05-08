import { Module } from '@nestjs/common';
import { AuthModule } from 'modules/auth';
import { ConfigModule } from 'modules/config';
import { MailModule } from '../mail/mail.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, AuthModule, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
