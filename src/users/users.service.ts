import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
  
  private readonly users: User[];

  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {    
    super(usersRepository);
    this.users = [
      {
        id: 1,
        email: 'john',
        password: 'changeme',
        firstname: 'bla',
        lastname: 'bla'
      },
      {
        id: 2,
        email: 'may',
        password: 'changeme',
        firstname: 'bla',
        lastname: 'bla'
      },
      {
        id: 3,
        email: 'clau',
        password: 'changeme',
        firstname: 'bla',
        lastname: 'bla'
      },
    ];
  }

  async findOneUser(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  // create(createUserDto: CreateUserDto): Promise<User> {
  //   const user = new User();
  //   user.email = createUserDto.email;
  //   user.password = createUserDto.password;
  //   user.firstName = createUserDto.firstName;
  //   user.lastName = createUserDto.lastName;

  //   return this.usersRepository.save(user);
  // }

  // async findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }

  // findOne(id: string): Promise<User> {
  //   return this.usersRepository.findOne(id);
  // }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}
