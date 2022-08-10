import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
} from '@nestjs/common';

import { CatService } from './cat.service';

import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post(':ownerId')
  async create(
    @Param('ownerId', ParseIntPipe) ownerId: number,
    @Body() dto: CreateCatDto,
  ) {
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
