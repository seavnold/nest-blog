import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class UserDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    name: string
}