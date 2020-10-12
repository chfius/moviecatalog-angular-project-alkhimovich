import { find } from 'rxjs/internal/operators';
import { from } from 'rxjs';
import { User } from './../models/user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public autorized = false;
  private users = [
    { login: 'user', password: '123456', isLogin: false },
    { login: 'yura', password: '098765', isLogin: false },
  ];

  checkLogin(user: User): boolean {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].login === user.login &&
        this.users[i].password === user.password
      ) {
        this.autorized = true;
        return true;
      }
    }
    return false;
  }

  whoIsLog(): string | null {
    let userLogin: User;
    from(this.users)
      .pipe(find((user) => user.isLogin))
      .subscribe((user) => (userLogin = user));
    return userLogin ? userLogin.login : null;
  }

  userLogIn(userCur: User): void {
    this.users.map((user) => {
      user.isLogin = user.login === userCur.login;
    });
  }
}
