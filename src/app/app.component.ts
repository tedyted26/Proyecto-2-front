import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto2-front';
  posts:any;
  readonly ROOT = "http://localhost:5000"

  constructor(private http: HttpClient){}
  getData(){
      this.posts = this.http.get(this.ROOT+ "/test")
  }
}
