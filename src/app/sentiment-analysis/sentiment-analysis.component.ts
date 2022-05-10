import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})

export class SentimentAnalysisComponent {
  foto: String = "assets/fotocompu2.png";
  sentimiento: String = "";
  
  texto = "";

  onClickSubmit() {
    this.onGetData(this.texto)
 }

  constructor(private sentiment: SentimentAnalysisService) {}
  ngOnInit(): void{ 
  }
  
  onGetData(text: String): void{
    this.sentiment.getDataFromBackend(text).subscribe(
      (response:Data) => this.sentimiento = response["type_text"],
      (error:any) => console.log(error),
      () => console.log("Se ha terminado el proceso")
    );
    
  }

}



