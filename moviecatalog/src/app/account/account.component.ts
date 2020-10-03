import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  userFrom = new FormGroup({
    login: new FormControl('', Validators.required),
    name: new FormControl(),
    password: new FormControl('', Validators.required),
  });

  onSubmit(data: any): void {
    console.log('AccountComponent -> onSubmit -> form', data);
  }

  // TODO: сделать авторизацию пользователя

  constructor() {}

  ngOnInit(): void {}
}
