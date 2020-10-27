import { MoviesService } from './../services/movies.service';
import { AddfilmCloseGuard } from './../components/addfilm/addfilm.close.guard';
import { AddFilmGuard } from './../components/addfilm/addfilm.guard';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { AddfilmComponent } from './../components/addfilm/addfilm.component';
import { AccountComponent } from './../components/account/account.component';
import { MoviedashboardComponent } from './../components/moviedashboard/moviedashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: MoviedashboardComponent
  },
  { path: 'account', component: AccountComponent },
  {
    path: 'add',
    component: AddfilmComponent,
    canActivate: [AddFilmGuard],
    canDeactivate: [AddfilmCloseGuard],
  },
  {
    path: 'about-page',
    loadChildren: () =>
      import('./../components/about-page/about-page.module').then(
        (m) => m.AboutPageModule,
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AddFilmGuard, AddfilmCloseGuard, MoviesService],
})
export class RoutingModule {}
