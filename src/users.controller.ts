import { Controller, Inject } from "@nestjs/common";
import { Subject } from 'rxjs';
@Controller('/user')
export class UsersController {
/**
  constructor(@Inject('EVENT_STORE') private eventBus: Subject<any>) {
    console.log('ENV_CONFIG', this.eventBus)
  } */

  constructor(@Inject('DATABASE_CONNECTION') private eventBus: any){
    console.log('ENV_CONFIG',this.eventBus)
  }


}