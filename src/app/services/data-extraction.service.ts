import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DataExtractionService {

  //data_observable: Observable<ExtraData>;

  constructor(private http: HttpClient) {
  }
  
  getDataFromServer() {
    return this.http.post<UserData>("http://127.0.0.1:8000/api/me", {Texto:'Patata'})
    
  }

  getGraphicsData(){
    return this.http.post("http://127.0.0.1:8000/api/getGraphics", {Texto:'Patata'})
  }



}
