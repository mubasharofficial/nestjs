import { Injectable, Scope } from "@nestjs/common";

interface User{
                  id:number;
                  name:string;
                  age:number;
}
// @Injectable()              
// @Injectable({ scope:Scope.DEFAULT })              
// @Injectable({ scope:Scope.REQUEST })              
@Injectable({ scope:Scope.TRANSIENT })
export class UsersStore{
  private store = new Map<number, User>();
  constructor(){
    console.log('user Store Init');
  }
  addUser(user:User){
    this.store.set(user.id,user)
  }
  getUser(user:User){
    return Array.from(this.store).map((_,user)=>user);
  }
}
