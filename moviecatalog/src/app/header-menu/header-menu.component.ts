import { AuthService } from './../account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
})
export class HeaderMenuComponent implements OnInit {
  loggedUser: string;

  get isAutorized(): boolean {
    return this.authService.autorized;
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.loggedUser = auth.email;
      }
    });
  }
}
