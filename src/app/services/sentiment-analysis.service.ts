import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../data';




@Injectable({ providedIn: 'root' })
export class SentimentAnalysisService {

  data_observable: Observable<Data>;
  
  constructor(private http: HttpClient) {}

  getDataFromBackend(text:String): Observable<Data> {
      this.data_observable = this.http.post<Data>("http://127.0.0.1:8000/api/busquedas", {texto: text});
      return this.data_observable;
  }

}



 

