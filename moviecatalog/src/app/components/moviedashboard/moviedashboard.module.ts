import { FilterComponent } from './../moviedashboard/filter/filter.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MoviedashboardComponent } from './moviedashboard.component';

const routes: Routes = [{ path: '', component: MoviedashboardComponent }];

@NgModule({
  declarations: [MoviedashboardComponent, MoviecardComponent, FilterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MoviedashboardModule {}
