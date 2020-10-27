import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { RoutingModule } from './../routing/routing.module';
import { HeaderMenuComponent } from './../components/header-menu/header-menu.component';
import { AuthService } from './../components/account/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviecardComponent } from './../components/moviedashboard/moviecard/moviecard.component';
import { MoviedashboardComponent } from './../components/moviedashboard/moviedashboard.component';
import { FilterComponent } from './../components/filter/filter.component';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { AddfilmComponent } from './../components/addfilm/addfilm.component';
import { AccountComponent } from './../components/account/account.component';
import { AngularFireModule } from '@angular/fire';
import { firebase } from '../../environments/firebase';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AccountComponent,
    AddfilmComponent,
    PageNotFoundComponent,
    FilterComponent,
    MoviedashboardComponent,
    MoviecardComponent,
    HeaderMenuComponent,
  ],
  providers: [AuthService, RoutingModule],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
})
export class CoreModule {}
