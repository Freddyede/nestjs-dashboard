import {IsEmail, IsNotEmpty, IsStrongPassword} from 'class-validator';

export class UserLoginDto {
  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLowercase: 2,
    minNumbers: 2,
    minLength: 8,
    minSymbols: 2,
    minUppercase: 2,
  })
  password: string;
}
export class UserRegisterDto {
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLowercase: 2,
    minNumbers: 2,
    minLength: 8,
    minSymbols: 2,
  })
  password: string;
  @IsNotEmpty()
  roleName: string;
}
