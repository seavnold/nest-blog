import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto } from 'src/users/dtos/User.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/user/:id')
    async getUser(@Param('id', ParseIntPipe) id: number) {
        const user = await this.usersService.findUserById(id);
        if (user) return user
        else throw new HttpException('User Not Found!', HttpStatus.BAD_REQUEST)
    }

    @Get()
    getUsers() {
        return this.usersService.displayUsers()
    }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() userDto: UserDto) {
        this.usersService.createUser(userDto)
    }

    @Patch('/edit/user/:id')
    @UsePipes(ValidationPipe)
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() userDto: UserDto) {
        this.usersService.editUser(id, userDto)
    }

    @Delete('/delete/user/:id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.removeUser(id)
    }
}
