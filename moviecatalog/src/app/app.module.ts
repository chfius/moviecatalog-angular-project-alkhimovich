import { FakeBackendInterceptor } from './fakebackend/fake-backend.interceptor';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
  imports: [BrowserModule, RoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    AuthService,
    MoviesResolve,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
