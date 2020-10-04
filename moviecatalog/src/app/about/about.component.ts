import { User } from './../models/user.interface';

import { AuthService } from './../account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  userLoged: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userLoged = this.authService.whoIsLog();
  }
}
