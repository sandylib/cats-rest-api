import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService
  ) {}

 async create(dto: UserDto) {
  try {
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name
      }
    })
    return user;
  } catch (error) {
    if(
      error instanceof PrismaClientKnownRequestError
    ) {
      if(error.code === 'P2002') {
        throw new ForbiddenException(
          'Email has been taken',
        );
      }
    }
    throw error;
  }
 }

 getAll() {
   return this.prisma.user.findMany()
 }

 findOne(email: string) {
  return this.prisma.user.findUnique({
    where: {
      email
    }
  })
 }

}
