import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/models';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { CreateUserRequest } from 'src/user/interfaces';


@Injectable()
export class AuthService {
  constructor(@InjectModel(User) private userModel: typeof User,private jwt: JwtService,private userService: UserService){}
  async login(payload: AuthLoginDto): Promise<object> {
    const {email,password} = payload
    const foundedUser = await this.userModel.findOne({where: {email}})
    if(!foundedUser){
      throw new NotFoundException("User not found")
    }
    const accesToken = await this.jwt.signAsync(
      {
        id: foundedUser.id,
        email: foundedUser.email
      },{
        expiresIn: 120,
        secret: "asssa",
      }
    )

    return {
      token: accesToken,
      email: email,
      id: foundedUser.id,
      
    };
  }

  async register(payload: AuthRegisterDto) {
    await this.userService.create(payload)
    const {email} = payload
    const foundedUser = await this.userModel.findOne({where: {email}})
    if(!foundedUser){
      throw new NotFoundException("User not found")
    }
    const accesToken = await this.jwt.signAsync(
      {
        id: foundedUser.id,
        email: foundedUser.email
      },{
        expiresIn: 120,
        secret: "asssa",
      }
    )

    return {
      token: accesToken,
      email: email,
      id: foundedUser.id,
      
    };
  }


}
