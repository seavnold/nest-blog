import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/typeorm';
import { UserDto } from 'src/users/dtos/User.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

    createUser(userDto: UserDto) {
        const newUser = this.userRepository.create(userDto)
        return this.userRepository.save(newUser)
    }

    findUserById(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({id});
    }

    displayUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    editUser(id: number, userDto: UserDto) {
        return this.userRepository.update(id, userDto)
    }

    async removeUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
