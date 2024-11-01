import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('users.findAll')
  findeAll(@Payload() pl: any){
    console.log('Pl', pl);
    return this.appService.findAll();
  }

  @MessagePattern('users.bridgeToBooks')
  bridgeToBooks(@Payload() pl: any){
    console.log('bridgeToBooks Pl', pl);
    return this.appService.bridgeToBooks();
  }
}
