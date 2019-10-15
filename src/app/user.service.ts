import { Injectable } from '@angular/core';
import { User } from './user/user';

@Injectable()
export class UserService {

  _user: User = {
    name: "Bruce",
    surname: "Willis"
  }

  getUser(){ 
    return this._user; 
  }

  setUser(user){ 
    this._user = user;
  }

}
