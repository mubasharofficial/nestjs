import { Module } from '@nestjs/common';
import { VideoController } from './Video.controller';
@Module({
  controllers: [VideoController],
})
export class AppModule {}
