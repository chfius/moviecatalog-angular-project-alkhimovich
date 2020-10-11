import { AuthService } from './../account/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  userLoged: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userLoged = this.authService.whoIsLog();
  }
}
