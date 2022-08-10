import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCatDto } from './dto';

@Injectable()
export class CatService {
  constructor(private prisma: PrismaService) {}

  async create(ownerId: number,dto: CreateCatDto) {
    
    const cat = await this.prisma.cat.create({
      data: {
        ownerId,
        ...dto
      }
    })

    return cat;
  }

  findAll() {
     return this.prisma.cat.findMany()
  }


  getCats(ownerId: number) {
    return this.prisma.cat.findMany({ where: { ownerId } } )
  }

 async deleteCatById(ownerId: number, catId: number) {
    const cat = await this.prisma.cat.findUnique({
      where: {
        id: catId
      }
    })

    if(!cat || cat.ownerId !== ownerId) {
      throw new ForbiddenException(
        'Access to resources denied',
      );
    }

    await this.prisma.cat.delete({
      where: {
        id: catId,
      },
    });
    
  }



}


