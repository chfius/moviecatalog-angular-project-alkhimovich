import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page.component';

const routes: Routes = [{ path: '', component: AboutPageComponent }];

@NgModule({
  declarations: [AboutPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AboutPageModule {}
