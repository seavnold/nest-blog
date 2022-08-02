import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/users/dtos/User.dto';

@Injectable()
export class UsersService {
    users = [
        {
            id: 1,
            email: 'arnold.sulana@gmail.com',
            name: "Arnold Sulana"
        },
        {
            id: 2,
            email: 'dane.nunez@gmail.com',
            name: "Pearl Nunez"
        },
        {
            id: 3,
            email: 'alwilson.tadeo@gmail.com',
            name: "Al Wilson"
        }
    ];

    findUserById(id: number) {
        return this.users.find((user) => user.id === id)
    }

    displayUsers() {
        return this.users;
    }

    createUser(userDto: UserDto) {
        this.users.push(userDto);
    }

    editUser(id: number, userDto: UserDto) {
        var findIndex = this.findUserIndex(id)
        if (findIndex < 0) return false
        this.users[findIndex].email = userDto.email
        this.users[findIndex].name = userDto.name
        return true
    }

    removeUser(id: number) {
        var findIndex = this.findUserIndex(id)
        this.users.splice(findIndex, 1)
    }

    private findUserIndex(id: number) {
        return this.users.findIndex((obj) => obj.id === id)
    }
}
