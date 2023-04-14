import { Controller, Inject,Get, ConsoleLogger } from "@nestjs/common";
import { UsersStore } from "./users.store";
import { Subject } from 'rxjs';
@Controller('/user')
export class UsersController {

  constructor(private store: UsersStore){
    console.log('Controller init'); // passportJS
  }

  @Get()
  getUser(){
return "Route Called";
  }


}