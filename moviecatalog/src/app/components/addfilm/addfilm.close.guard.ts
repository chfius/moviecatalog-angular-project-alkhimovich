import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';

import { AddfilmComponent } from './addfilm.component';

@Injectable({ providedIn: 'root' })
export class AddfilmCloseGuard implements CanDeactivate<AddfilmComponent> {
  canDeactivate(
    component: AddfilmComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
  ): boolean {
    if (component.hasUnsavedChanges) {
      return window.confirm('Есть несохраненные данные. Вы уверены?');
    }
    return true;
  }
}
