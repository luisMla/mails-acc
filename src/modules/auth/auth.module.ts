import { Module } from '@nestjs/common';
import { ConfigModule } from './../config';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AuthModule {}
