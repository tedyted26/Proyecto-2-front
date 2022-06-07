import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate{
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService, private router: Router) {
    const token = localStorage.getItem('user_auth');
  
    this._isLoggedIn$.next(!!token);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("Entra en can activate")

    let token = localStorage.getItem("user_auth");
    if (token){
      return true
    }
    this.router.navigate(["/Login"]);
    return false
  }


  login(email: string, password: string) {
    return this.apiService.login(email, password).pipe(
      tap((response: any) => {
        console.log(response.access_token)
        console.log("Token^^")
        this._isLoggedIn$.next(true);
        /*
        localStorage.setItem('user_auth', response.access_token);
        localStorage.setItem('name', 'Andres');
        localStorage.setItem('email', email);*/
        
        console.log(localStorage.getItem('user_auth'))
        console.log("Fin lcstorage")
        
      })
    );

  
}
}
