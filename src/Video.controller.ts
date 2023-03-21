import {Controller,Get,Param,Query,Headers} from '@nestjs/common';

interface VideoParams{
    id:number;
    name:string;
}

interface  StudentParams{
    name:string;
    age:number
}

@Controller('/videos')
export class VideoController{   

    /** Routes Paramers */
/*
    @Get('/video/:id')
    getVideo(@Param() params:Record<string,any>)
    {
       console.log(params) 
       return 'Success';
    }
    

    @Get('/video/:id/:name')
    getVideo(@Param('id') params:number)
    {
       console.log(params) 
       return 'Success';
    }


    @Get('/video/:id/:name')
    getVideo(@Param() params:Record<string,any>)
    {
       console.log(params) 
       return 'Success';
    }

    @Get('/video/:id/:name')
    getVideo(@Param() params:VideoParams)
    {
       console.log(params) 
       return 'Success';
    }
 */
 

    /** ++++++++++++++++++++++++++ Query Parameter +++++++++++++++++++++++++++++++++ */
    
    /** 
    Example
    /videos/video?name=ali&age=10
     
    */

    // @Get('/video')
    // getVideo(@Query() query:Record<string,any>)
    // {
    //    console.log(query) 
    //    return 'Success';
    // }

    // @Get('/video') /** Just fetch name from */
    // getVideo(@Query('name') query:string)
    // {
    //    console.log(query) 
    //    return 'Success: '+query;
    // }

    // @Get('/video') /** Just fetch name from */
    // getVideo(@Query() query:StudentParams)
    // {
    //    console.log(query) 
    //    return 'Success: '+query.name + 'Age: ' + query.age;
    // }

     /** ++++++++++++++++++++++++++ Heards Decorator +++++++++++++++++++++++++++++++++ */

     @Get('/video') /** Just fetch name from */
     getVideo(@Headers('user-agent') headers:Record<string,any>)
     {
        console.log(headers) 
        return 'Success';
     }
    

}