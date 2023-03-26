import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersStore } from './store/users.store';
import { Store } from './store/store';
@Module({
  controllers: [UsersController],
  // providers:[{provide: UsersStore,useClass:UsersStore}],
  // providers:[UsersStore] /** if provider and className is same than use this syntx */
  // providers:[{provide: 'STORE',useClass:UsersStore}], /** in this case provider name and class name is differant */
  //providers:[{provide: UsersStore,useClass:Store}], /** in this case provider name and class name is differant */
  providers:[UsersStore,{provide: Store,useExisting:UsersStore}]
})
export class AppModule {}
