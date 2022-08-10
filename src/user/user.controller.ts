import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserDto, } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}


  @Post()
  create(@Body() dto: UserDto) {
    return this.userService.create(dto)
  }

  @Get()
  getAll() {
    return this.userService.getAll()
  }
  
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.userService.findOne(email)
  }

}
