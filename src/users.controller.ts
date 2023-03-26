import { Controller, Get, Inject, Optional } from "@nestjs/common";
import { UsersStore } from "./store/users.store";
import { Store } from "./store/store";
@Controller({ path: '/users' })
export class UsersController {
  /*
    constructor(private store: UsersStore)
    {
          console.log('userStore',store)
      }

  */

  /*
      constructor(@Inject(UsersStore) private store: UsersStore) 
      {
          console.log('userStore',store)
      }

   */
  

  /*
    constructor(@Optional() private store: UsersStore) 
    {
         console.log('userStore',store)
    }
  */

    /** Please Note @Inject Decorater is than used when provider name and class name is different */
 /* 
 constructor(@Inject('STORE') private store: UsersStore) { 
    console.log('userStore', store)
  } 

  */

  /** that is case us used to when we use injection token other class */
  constructor(private store: Store) { 
    console.log('userStore', store)

  } 

}