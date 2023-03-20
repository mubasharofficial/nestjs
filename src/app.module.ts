import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumsController } from './album.controller';
@Module({
  controllers: [UsersController,AlbumsController],
})
export class AppModule {}
