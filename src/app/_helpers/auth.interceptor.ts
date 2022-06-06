import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';
const TOKEN_HEADER_KEY = 'Authorization'; 



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    //const token = this.token.getToken();
    const token = localStorage.getItem('auth_token')
    
    if (token) {
      console.log("Si hay token")
      const cloned = req.clone({
        headers: req.headers.set("Authorization", "Bearer " + token)
      });

      return next.handle(cloned);
    }
    else{
      console.log("No hay token")
      return next.handle(req)
    }
    
  
  }
}
