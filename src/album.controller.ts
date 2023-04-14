import { Controller, Inject,Get, ConsoleLogger } from "@nestjs/common";
import { UsersStore } from "./users.store";
import { Subject } from 'rxjs';
@Controller('/album')
export class AlbumController {

  constructor(private store: UsersStore){
    console.log('Controller init'); // passportJS
  }

  @Get()
  getUser(){
return "Route Called";
  }


}