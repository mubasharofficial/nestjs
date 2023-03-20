import {Controller,Get,Req,Res,HttpCode,HttpStatus,Header,Redirect} from '@nestjs/common';
import { Request, Response } from 'express';
import {of} from 'rxjs';
@Controller('/user')
export class UsersController{

    @Get('/profile')
    @HttpCode(HttpStatus.NO_CONTENT)
    getProfile(@Req() req: Request,@Res({passthrough:true}) res: Response)
    {
        res.status(200);
        return {
                    hello:'World'
                }
    }



    @Get('/user')
    @Header('Cache-Controller','none')
    @Header('X-Name','Mubahar')
    @HttpCode(200)
    getUser(@Req() req: Request)
    {
        return {
                    hello:'World'
                }
    }


    @Get('/reuser')
    @Redirect('/user/acount',3001)
    getRedirectUser(@Req() req: Request)
    {
        const rn = ~~(Math.random() *10 +1);

        if(rn < 5)
        {   
            return {
                        url:'/user/acount',
                        statusCode:302
                    }

        }else{

            return {
                url:'/user/acount-detail',
                statusCode:302
            }
        }

    }

    @Get('/acount')
    Redirect()
    {
        return "Working Account";
    }

    
    @Get('/acount-detail')
    Account_Detail()
    {
        return "account Detail";
    }

}