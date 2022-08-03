import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string) {
    const SALT = await bcrypt.genSalt();
    return bcrypt.hashSync(rawPassword, SALT)
}

export async function isMatch(password: string) {
    return await bcrypt.compare(password, this.encodePassword(password))
}