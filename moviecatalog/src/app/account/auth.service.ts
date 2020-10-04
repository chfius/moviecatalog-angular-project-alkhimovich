import { User } from './../models/user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  users = [
    { login: 'admin', password: '123456', isLogin: false },
    { login: 'user', password: '123456', isLogin: false },
  ];

  checkLogin(user: User): boolean {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].login === user.login &&
        this.users[i].password === user.password
      ) {
        return true;
      }
    }
    return false;
  }

  userLogIn(userCur: User): void {
    this.users.map((user) => {
      if (user.login === userCur.login) {
        user.isLogin = true;
      }
    });
  }
}
