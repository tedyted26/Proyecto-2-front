import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../data';



@Injectable({ providedIn: 'root' })
export class SentimentAnalysisService {

  constructor(private http: HttpClient) {}

  getDataFromBackend(text:String): Observable<Data> {
     return this.http.post<Data>("http://127.0.0.1:5000/app-sentiment-analysis", {texto: text})
   }

}



 

