import { Controller, Inject,Get, ConsoleLogger,Body,Post ,Param,Put,Delete, ParseIntPipe, HttpStatus, Query, UsePipes, ParseUUIDPipe, HttpException, BadRequestException, NotFoundException, UnauthorizedException} from "@nestjs/common";
import { UsersService } from "./users.service";
// import { UsersStore } from "./users.store";
// import { Subject } from 'rxjs';

import {CreateUserDTO} from './dto/create-user.dto';
@Controller('/user')
export class UsersController {
                    // injection token 
  constructor(private usersService: UsersService) { }
  @Post()
  createUser(@Body() createUserDto: CreateUserDTO) {
    this.usersService.addUser(createUserDto);
    return { message: 'USER ADDED' };
  }
  @Get()
  findAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  findUser(@Param('id',ParseIntPipe) id: number) {
    if(id<=0){
      // throw new Error(); //that will handle problem himself

      // throw new HttpException("Invalid id",HttpStatus.BAD_REQUEST);

    //  throw new BadRequestException("Invalid Id")
    //  throw new BadRequestException("Invalid Id",'message id should e heigher than 0');
      // throw new BadRequestException(
      //   {
      //   error:"Invalid id",
      //   messaage:"Id must be higher than 00",
      //   timestamp:Date.now(),
      //   data:id
      // });

     /* throw new HttpException({
        error: "Invalid id",
        message: "Id must be higher than 0",
        timestamps:Date.now(),
      },HttpStatus.BAD_REQUEST);
      */

      // throw new NotFoundException();
      // throw new UnauthorizedException();

    } 
    return {success:true,id};
  }



}