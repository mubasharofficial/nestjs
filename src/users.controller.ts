import { Controller,Inject} from "@nestjs/common";
import { Config } from "./config";
@Controller('/user')
export class UsersController {
 /** 
    constructor(@Inject('DATABASE_NAME') private dbName:string){
    console.log('DATABASE',dbName)
  }
 */

/** 
  constructor(@Inject('MAIL') private email:string[]){
    console.log('EmailList',email)
  }
*/

/**
constructor(@Inject('ENV_CONFIG') private config:Record<string,any>){
  console.log('ENV_CONFIG',this.config)
}
*/

constructor( private config:Config){
  console.log('ENV_CONFIG',this.config)
}

}