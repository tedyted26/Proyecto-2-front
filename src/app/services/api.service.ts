import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../data';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data_observable: Observable<Data>;

  constructor(private http: HttpClient) {}
  login(email: string, password: string) {
    console.log("Va hacer login")
    return this.http.post('http://127.0.0.1:8000/api/auth/login', { email, password },httpOptions)

  }
  register(name: string, email: string, password: string) {
    console.log("Va hacer registro")
    this.data_observable = this.http.post<Data>("http://127.0.0.1:8000/api/register",
     {name: name, email: email, password: password});
    return this.data_observable;

  }
  modData(email: string, tlf: string) {
    console.log("Va modificar los datos")
    console.log(email)
    console.log(tlf)
    this.data_observable = this.http.post<Data>("http://127.0.0.1:8000/api/moddata",
     {email: email, tlf: tlf});
    return this.data_observable;

  }

}
