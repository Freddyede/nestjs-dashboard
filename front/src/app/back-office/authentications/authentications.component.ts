import {Component, OnInit} from '@angular/core';
import { IUser } from '../../users';
import {RouterLink} from '@angular/router';
import {UserFormService} from '../../user-form.service';

@Component({
  selector: 'app-authentications',
  imports: [
    RouterLink
  ],
  templateUrl: './authentications.component.html',
  styleUrl: './authentications.component.less'
})
export class AuthenticationsComponent implements OnInit {
  users: IUser[] | undefined = [];
  constructor(public userFormService: UserFormService) {
  }
  ngOnInit() {
    this.userFormService.getUsers().subscribe((res: any) => {
      console.log(res);
    });
  }
}
