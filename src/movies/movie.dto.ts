import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class MovieDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly director: string;

  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @IsNotEmpty()
  @IsString()
  readonly genre: string;

  @IsArray()
  readonly cast: string[];

  @IsNotEmpty()
  @IsString()
  readonly synopsis: string;
}
