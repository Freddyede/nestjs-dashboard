import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserFormService} from '../../../user-form.service';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-authentications-detail-component',
  imports: [
    DatePipe,
    NgIf
  ],
  templateUrl: './authentications-detail-component.component.html',
  styleUrl: './authentications-detail-component.component.less'
})
export class AuthenticationsDetailComponent implements OnInit {
  user: any | undefined = undefined;
  constructor(private route: ActivatedRoute, private userFormService: UserFormService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userFormService.getUser(params['id']).subscribe((res: any) => this.user = res.data);
    });
  }
}
