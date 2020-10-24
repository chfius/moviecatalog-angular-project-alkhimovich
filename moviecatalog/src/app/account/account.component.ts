import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './../models/user.interface';
import { AuthService } from './auth.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', './account.form.css'],
})
export class AccountComponent implements OnInit {
  @ViewChild('loginIn') msg: ElementRef<HTMLElement>;

  isLoged: Observable<boolean>;

  message: string;

  userFrom = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{6,20}$'),
    ]),
  });

  login(user: User): void {
    this.authService
      .login(user.email, user.password)
      .then((res) => {
        console.log('res', res);
        this.showMessage(true);
      })
      .catch((err) => {
        this.message = err;
        this.msg.nativeElement.style.display = 'block';
        setTimeout(() => (this.msg.nativeElement.style.display = 'none'), 3000);
      });
  }

  logout(): void {
    this.showMessage(false);
    this.authService.logout();
  }

  register(user: User): void {
    this.authService.register(user.email, user.password).catch((err) => {
      this.message = err;
      this.msg.nativeElement.style.display = 'block';
      setTimeout(() => (this.msg.nativeElement.style.display = 'none'), 3000);
    });
  }

  showMessage(success: boolean): void {
    success ? (this.message = 'Вы вошли!') : (this.message = 'Вы вышли!');

    this.msg.nativeElement.style.display = 'block';
    setTimeout(() => (this.msg.nativeElement.style.display = 'none'), 3000);
  }

  get isAutorized(): boolean {
    return this.authService.autorized;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
