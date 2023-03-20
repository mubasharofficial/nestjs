import {Controller,Get,Post,Put,Delete,Patch,Req} from '@nestjs/common';
import { Request, response } from 'express';
import {of} from 'rxjs';
@Controller('/user')
export class UsersController{

    @Get('/profile')
    async getProfile(){
        return new Promise((resolve,Reject)=>{
            resolve( {
                        'result':'Welcome To Pakistan'
                     }
            )
        })
    }

    @Get('/user')
    userInfo(@Req() req: Request){
        // observeAble
        console.log(req)
        return of({    
            'id':'121',
            'name':'Ali',
            'class':'7th',
        })
    }

}