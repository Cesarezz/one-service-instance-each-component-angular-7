import { Component } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'injector-root-home-component',
  templateUrl: './home-component.component.html',
  providers:  [ UserService ]
})
export class HomeComponentComponent {

  public user: User;

  constructor(private userService: UserService) { 

    this.user = userService.getUser();

  }

  changeService(){

    let userNew = Object.assign({}, this.user);

    this.userService.setUser(userNew);

  }


}
