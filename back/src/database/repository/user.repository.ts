import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepository extends Repository<User> {
  constructor(@InjectRepository(User) public userRepository: Repository<User>) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('u')
      .leftJoinAndSelect('u.roles', 'roles')
      .where('u.email = :email', { email })
      .getOneOrFail();
  }
  findAllExceptEmail(email: string): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder('u')
      .leftJoinAndSelect('u.roles', 'roles')
      .where('u.email != :email', { email })
      .getMany();
  }
}
