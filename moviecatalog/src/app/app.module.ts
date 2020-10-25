import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { MoviesResolve } from './moviedashboard/moviedashboard.resolve';
import { AuthService } from './account/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { MoviedashboardComponent } from './moviedashboard/moviedashboard.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { RoutingModule } from './routing/routing.module';
import { AccountComponent } from './account/account.component';
import { AddfilmComponent } from './addfilm/addfilm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    MoviedashboardComponent,
    MoviecardComponent,
    HeaderMenuComponent,
    AccountComponent,
    AddfilmComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [AuthService, MoviesResolve],
  bootstrap: [AppComponent],
})
export class AppModule {}
