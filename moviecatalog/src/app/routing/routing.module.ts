import { MoviesService } from './../services/movies.service';
import { MoviesResolve } from './../moviedashboard/moviedashboard.resolve';
import { AddfilmCloseGuard } from './../addfilm/addfilm.close.guard';
import { AddFilmGuard } from './../addfilm/addfilm.guard';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { AddfilmComponent } from './../addfilm/addfilm.component';
import { AccountComponent } from './../account/account.component';
import { MoviedashboardComponent } from './../moviedashboard/moviedashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    component: MoviedashboardComponent,
    resolve: { movies: MoviesResolve },
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
      import('../about-page/about-page.module').then((m) => m.AboutPageModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AddFilmGuard, AddfilmCloseGuard, MoviesService, MoviesResolve],
})
export class RoutingModule {}
