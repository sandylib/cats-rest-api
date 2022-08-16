import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCatDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  age: number;

  @ApiProperty({
    type: String,
  })
  @IsString()
  breed: string;

}
