import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Cat } from '@prisma/client';

import { CatService } from './cat.service';

import { CreateCatDto } from './dto/create-cat.dto';

@ApiTags('cats')
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post(':ownerId')
  @ApiCreatedResponse({
    description: 'The record has been successfully created.'
  })
  async create(
    @Param('ownerId', ParseIntPipe) ownerId: number,
    @Body() dto: CreateCatDto,
  ): Promise<Cat> {
    return this.catService.create(ownerId, dto);
  }

  @Get(':ownerId')
  getCats(@Param('ownerId', ParseIntPipe) ownerId: number) {
    return this.catService.getCats(ownerId);
  }

  @Delete(':ownerId/:catId')
  deleteCatByOwnerId(
    @Param('ownerId', ParseIntPipe) ownerId: number,
    @Param('catId', ParseIntPipe) catId: number,
    ) {
    return this.catService.deleteCatById(ownerId, catId);
  }
}
