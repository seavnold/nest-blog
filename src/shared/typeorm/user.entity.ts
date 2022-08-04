import { encodePassword } from "src/utils/bcrypt";
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @BeforeInsert()
    async genHashPassword() {
        this.password = await encodePassword(this.password);
    }

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id'
    })
    id: number;

    @Column({
        nullable: false,
        default: ''
    })
    username: string;

    @Column({
        name: 'email_address',
        nullable: false,
        default: ''
    })
    email: string;

    @Column({
        nullable: false,
        select: false,
        default: ''
    })
    password: string;
}