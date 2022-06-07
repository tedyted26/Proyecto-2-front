import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiService: ApiService) {
    const token = localStorage.getItem('user_auth');
  
    this._isLoggedIn$.next(!!token);
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
