import { Controller,Post, Body, Get, Param,Put, Delete} from "@nestjs/common";
import { CreateuserDtO } from "./tdo";
let USERS=[];
@Controller('/users')
export class UserController{
   @Post()
   addUser(@Body() createuserDto:CreateuserDtO){

    USERS.push(createuserDto);
    return 'User added';
   }
   @Get()
   getAllUser(){
    return USERS;
   }
   @Get(":id")
   getUser(@Param("id")id:number)
   {
        return USERS.find(user=>user.id === +id)
   }
   @Put(":id")
   updateuser(@Param("id")id:number,@Body() UpdateUserDTO:CreateuserDtO)
   {
    const userindx = USERS.findIndex(user=>user.id===+id);
    if(!userindx){
        return
    }else{
        USERS[userindx]=UpdateUserDTO;
    }
   }
   @Delete(":id")
   deleteUser(@Param("id")id:number)
   {
     USERS = USERS.filter(user=>+user.id!=+id);
 
   }
    
}