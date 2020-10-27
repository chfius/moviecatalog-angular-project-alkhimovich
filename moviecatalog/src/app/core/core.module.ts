import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { RoutingModule } from './../routing/routing.module';
import { HeaderMenuComponent } from './../components/header-menu/header-menu.component';
import { AuthService } from './../components/account/auth.service';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { AngularFireModule } from '@angular/fire';
import { firebase } from '../../environments/firebase';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PageNotFoundComponent, HeaderMenuComponent],

  imports: [
    CommonModule,
    RoutingModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    AngularFireModule.initializeApp(firebase),
  ],
  exports: [
    HeaderMenuComponent,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
  ],
  providers: [AuthService, RoutingModule],
})
export class CoreModule {}
