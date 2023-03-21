import {Controller,Post,Body} from '@nestjs/common';

interface VideoDTO{
   name:string,
   tag:string
}

@Controller('/videos')
export class VideoController{   

     @Post('/addvideo') /** Just fetch name from */
      addVideo(@Body() RequestData:VideoDTO)
      {
         console.log(RequestData.name);
         return "Success";
      }
}