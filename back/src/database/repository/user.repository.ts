import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository extends Repository<User> {
  @InjectRepository(User) private userRepository: Repository<User>;

  findByEmail(email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('u')
      .leftJoinAndSelect('u.roles', 'roles')
      .where('u.email = :email', { email })
      .getOneOrFail();
  }
}
