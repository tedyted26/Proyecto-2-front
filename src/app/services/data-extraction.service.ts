import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExtraData } from '../data';

@Injectable({
  providedIn: 'root'
})
export class DataExtractionService {

  data_observable: Observable<ExtraData>;

  constructor(private http: HttpClient) {
  }
  
  getDataFromServer() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
}


}
