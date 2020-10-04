import { User } from './../models/user.interface';
import { AuthService } from './auth.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', './account.form.css'],
})
export class AccountComponent implements OnInit {
  userFrom = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9]{2,9}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{6,20}$'),
    ]),
  });

  onSubmit(user: User): void {
    if (this.authService.checkLogin(user)) {
      this.authService.userLogIn(user);
      document.getElementById('loginIn').style.display = 'block';
      // TODO: можно ли на этом этапе осуществить принудительный переход по ссылке на /main ?
    }
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
