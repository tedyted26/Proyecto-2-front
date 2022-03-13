import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class SentimentAnalysisService {
  resp: Observable<Object> | undefined

  constructor(private http: HttpClient) {}

    public getDataFromBackend():Observable<Object>{
      return this.http.get("http://127.0.0.1:5000/");
    }

}



 

