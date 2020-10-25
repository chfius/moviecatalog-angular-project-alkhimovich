import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<div><img src="../../assets/404.png" alt="404" /></div>`,
  styles: ['div {width: 100%;text-align: center;}'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
