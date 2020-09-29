import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomlineComponent } from './randomline/randomline.component';
import { FilterComponent } from './filter/filter.component';
import { MoviedashboardComponent } from './moviedashboard/moviedashboard.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { RoutingModule } from './routing/routing.module';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import { AddfilmComponent } from './addfilm/addfilm.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomlineComponent,
    FilterComponent,
    MoviedashboardComponent,
    MoviecardComponent,
    HeaderMenuComponent,
    AccountComponent,
    AboutComponent,
    AddfilmComponent,
  ],
  imports: [BrowserModule, RoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
