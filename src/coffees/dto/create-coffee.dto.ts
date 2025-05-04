import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Flavor } from '../entities/flavor.entity';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'Coffee name' })
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Coffee brand',
    examples: ['Starbucks', 'Enchilado'],
  })
  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: Flavor[];
}
