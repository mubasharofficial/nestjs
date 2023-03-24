import { Controller, Get, HostParam,Ip} from "@nestjs/common";

// @Controller({path:'/users',host:':app.domain.com'})
@Controller({path:'/users'})
export class UserController{
@Get()
getUser(@HostParam('domain') params:Record<string, any>)
{
  return 'Success';
} 

@Get('/u2')
get2User(@Ip() ip:string)
{
  return 'return: '+ ip;
}

}