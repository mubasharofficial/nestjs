import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Config } from './config';
@Module({
  controllers: [UsersController],
    providers:[
      {provide:'DATABASE_NAME',useValue:'kdfm23lkfmsl3kmsklj3kmsdfklj3rklmsdlkfh3ks'}, /** useValue define valu which could accessble all Controller */
      {provide:'MAIL',useValue:['mical@gmail.com','meo@gmail.com']},
      {
        provide:'ENV_CONFIG',useValue:{
          type:'DEV',
          node:'17'
        }
      },
      {
        provide:Config,useValue:{
          type:'DEV',
          node:'17',
          class:'Config'
        }
      },

    ] 
  

  })
export class AppModule {}
