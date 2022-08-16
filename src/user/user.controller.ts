import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { UserDto, } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}


  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'}) 
  create(@Body() dto: UserDto): Promise<User> {
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
