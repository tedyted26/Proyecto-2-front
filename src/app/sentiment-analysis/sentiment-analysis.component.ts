import { Component, Input, OnInit } from '@angular/core';
import { SentimentAnalysisService } from '../sentiment-analysis.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})
export class SentimentAnalysisComponent implements OnInit {

  @Input("formulario")
  formulario: String = "";
  @Input("foto") 
  foto: String = "assets/fotocompu2.png";
  posts:any;
  readonly ROOT = "http://localhost:5000"

  
  constructor(private service: SentimentAnalysisService, private http: HttpClient) {

   }

  ngOnInit(){
    this.service.getDataFromBackend().subscribe((response) =>{alert(response)} )
  }

}

