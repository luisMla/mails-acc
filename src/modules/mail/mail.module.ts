import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [],
  exports: [MailService],
  providers: [MailService],
  controllers: [MailController],
})
export class MailModule {}
