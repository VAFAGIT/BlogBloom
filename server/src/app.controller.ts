import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
   
   @Post(path: 'register')
    async register(
      @Body(property: 'name') name: string,
      @Body(property: 'email') email: string,
      @Body(property: 'password') password: string
      ) {

   }
}
