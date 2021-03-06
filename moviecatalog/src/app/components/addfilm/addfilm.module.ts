import { AddfilmCloseGuard } from './addfilm.close.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddfilmComponent } from './addfilm.component';

const routes: Routes = [
  { path: '', component: AddfilmComponent, canDeactivate: [AddfilmCloseGuard] },
];

@NgModule({
  declarations: [AddfilmComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [AddfilmCloseGuard],
})
export class AddfilmModule {}
