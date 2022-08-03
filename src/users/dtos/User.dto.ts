import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class UserDto {
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string
}