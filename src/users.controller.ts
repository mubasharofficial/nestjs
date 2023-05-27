import { Controller, Inject,Get, ConsoleLogger,Body,Post ,Param,Put,Delete, ParseIntPipe, HttpStatus, Query, UsePipes} from "@nestjs/common";
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
    console.log(typeof id);
    this.usersService.getUser(id);
  }

  @Get('salary/:id')
  findsallery(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id: number) {
    console.log(typeof id);
    this.usersService.getUser(id);
  }

  @Get('salary2/:id')
  // @UsePipes(ParseIntPipe)
  findsallery2(@Param('id',ParseIntPipe) id: number, @Query("increment",ParseIntPipe) inc:number){
    
    console.log(typeof id);
    console.log(typeof inc);

    this.usersService.getUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDTO) {
    this.usersService.updateUser(+id, updateUserDto);
    return { message: 'USER UPDATED' };
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    this.usersService.deleteUser(id);
    return { message: 'USER DELETED' }
  }


}