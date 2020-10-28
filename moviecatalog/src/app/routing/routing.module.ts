import { MoviesService } from './../services/movies.service';
import { AddFilmGuard } from './../components/addfilm/addfilm.guard';
import { PageNotFoundComponent } from './../components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./../components/moviedashboard/moviedashboard.module').then(
        (m) => m.MoviedashboardModule,
      ),
  },
  { path: 'main', redirectTo: '', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () =>
      import('./../components/account/account.module').then(
        (m) => m.AccountModule,
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./../components/addfilm/addfilm.module').then(
        (m) => m.AddfilmModule,
      ),
    canActivate: [AddFilmGuard],
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
  providers: [AddFilmGuard, MoviesService],
})
export class RoutingModule {}
