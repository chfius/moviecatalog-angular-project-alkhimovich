import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomlineComponent } from './randomline/randomline.component';
import { FilterComponent } from './filter/filter.component';
import { MoviedashboardComponent } from './moviedashboard/moviedashboard.component';
import { MoviecardComponent } from './moviecard/moviecard.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomlineComponent,
    FilterComponent,
    MoviedashboardComponent,
    MoviecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
