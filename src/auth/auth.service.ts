import { Injectable } from '@nestjs/common';
import { UsersService } from '..//users/users.service';
import { JwtService } from '@nestjs/jwt';

// This service has the job of retrieving a user and verifying the password. We create a validateUser() method for this purpose.
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,    
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {    
    const user = await this.usersService.findOne({ where: { email } });
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      token: this.jwtService.sign(payload),
      firstname: user.firstname,
      lastname: user.lastname  
    };
  }
}

// Warning
// Of course in a real application, you wouldn't store a password in plain text. You'd instead use a library like bcrypt, with a salted one-way hash algorithm. With that approach, you'd only store hashed passwords, and then compare the stored password to a hashed version of the incoming password, thus never storing or exposing user passwords in plain text. To keep our sample app simple, we violate that absolute mandate and use plain text. Don't do this in your real app!