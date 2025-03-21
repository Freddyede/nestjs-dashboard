import { Component } from '@angular/core';
import { IUser } from '../../users';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-authentications',
  imports: [
    RouterLink
  ],
  templateUrl: './authentications.component.html',
  styleUrl: './authentications.component.less'
})
export class AuthenticationsComponent {
  users: IUser[] | undefined = [];
}
