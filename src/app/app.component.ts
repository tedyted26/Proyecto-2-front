import { Component, OnInit } from '@angular/core';
import { SentimentAnalysisService } from './services/sentiment-analysis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proyecto2-front';
  posts:any;
  readonly ROOT = "http://localhost:5000"

  constructor(private sentiment:SentimentAnalysisService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  display = false;
  onPress() {
    this.display = true;
    /*if you want the component to show and hide on click pressed, use 
    use this line
    this.display = !this.display;*/
  }
  
  
  
}
