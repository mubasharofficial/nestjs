import { Module } from '@nestjs/common';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { UsersStore } from './users.store';
import { UsersController } from './users.controller';
import { AlbumController } from './album.controller';

@Module({
  controllers: [UsersController,AlbumController],
  providers:[UsersStore]
})
export class AppModule { }
