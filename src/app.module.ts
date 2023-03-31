import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { UsersController } from './users.controller';
const IS_DEV_MODE = false;
@Injectable()
class EnvConfig {
  envType: "DEV" | "STAGE" | "PROD";
  constructor() {
    this.envType = "DEV";
  }
}
async function createConnection(options:any) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('This is an asynchronous response!,'+ options.url);
    }, 1000);
  });
}

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: "DATABASE_CONNECTION",
      useFactory: async (options)=>{
        const connection = await createConnection(options);
        return connection;
      },
      inject:['DB_OPTIONS']
    },
    {
      provide:'DB_OPTIONS',
      useValue:{url:'localhost:3000',user:'root',password:'toor'}
    },
    {
      provide: "EVENT_STORE", /** that is string injector which name 'EVENT_STORE' And Over all is Factory Provider */
      useFactory: (config: EnvConfig, limit: number = 4, subj_limit: any) => { /** this took value by sequence first injector took first second took second */
        const eventBus$ = config.envType === "DEV" ? new ReplaySubject(limit) : new BehaviorSubject(subj_limit);
        console.log('LIMIT:',limit,config)
        return eventBus$;
      },
      inject: [
        EnvConfig,
        { token: 'LIMIT', optional: true }, // that is optional syntex if you find than okay otherwise no problem.
        'Subj_LIMIT'
      ],
    },
    {
      provide: 'LIMIT',
      useValue: 2
    },
    {
      provide: 'Subj_LIMIT',
      useValue: null
    },
    EnvConfig, /** injection and class name is same than we use this syntx */
  ],


})
export class AppModule { }
