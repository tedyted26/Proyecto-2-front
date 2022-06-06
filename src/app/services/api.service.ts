import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    console.log("Va hacer login")
    return this.http.post('http://127.0.0.1:8000/api/auth/login', { email, password },httpOptions)

  }
  register(name: string, email: string, password: string) {
    console.log("Va hacer registro")
    return this.http.post('http://127.0.0.1:8000/api/auth/register', { name, email, password })

  }

}
