import { IsString, IsInt, Length } from 'class-validator';

export class CreateProfileDto {
    
    @IsString()
    @Length(3, 100)
    name: string;

    @IsInt()
    @Length(1, 3)
    age: number;

    @IsString()
    @Length(10, 500)
    description: string;
}