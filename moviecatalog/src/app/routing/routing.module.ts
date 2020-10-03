import { AddfilmComponent } from './../addfilm/addfilm.component';
import { AboutComponent } from './../about/about.component';
import { AccountComponent } from './../account/account.component';
import { MoviedashboardComponent } from './../moviedashboard/moviedashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    component: AccountComponent,
    // component: MoviedashboardComponent,
  },
  { path: 'account', component: AccountComponent },
  { path: 'add', component: AddfilmComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: '**', redirectTo: '/main' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
