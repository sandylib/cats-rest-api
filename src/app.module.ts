import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CatModule, 
    PrismaModule, 
    UserModule
  ]
})
export class AppModule {}
