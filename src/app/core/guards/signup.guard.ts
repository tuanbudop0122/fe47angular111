import { Injectable } from '@angular/core';
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { SignupComponent } from 'src/app/authentication/signup/signup.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //Dùng để ngăn chặn người dùng rời khỏi
    // return về true => cho phép rời khỏi
    const isDirty = component.checkDirtyForm();
    if (isDirty) {
      return confirm('bạn có chắc muốn rời khỏi');
    }
    return true;
  }
}
