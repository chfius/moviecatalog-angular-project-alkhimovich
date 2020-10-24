import { AuthService } from './../account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
})
export class HeaderMenuComponent implements OnInit {
  loggedUser: string;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = !!auth;
        this.loggedUser = auth.email;
      }
    });
  }
}
