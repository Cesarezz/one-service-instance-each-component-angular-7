import { Component } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'injector-root-detail-user',
  templateUrl: './detail-user.component.html',
  providers:  [ UserService ]
})
export class DetailUserComponent {

  public user: User;

  constructor(private userService: UserService) {

    this.user = userService.getUser();

  }

  ngOnInit() {
  }

}
