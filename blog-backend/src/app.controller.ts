import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import { AddFirstNameDto } from './dto/add-firstname.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  sayHello() {
    return this.appService.getAll();
  }

  @Post('/hello')
  addFirstName(@Body() addFirstNameDto: AddFirstNameDto) {
    const { firstName } = addFirstNameDto;
    console.log(firstName);
    return this.appService.addFirstName(firstName);
  }
}
