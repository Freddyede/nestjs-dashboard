import { IsNotEmpty } from 'class-validator';

export class RolesDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  access_token: string;
}
