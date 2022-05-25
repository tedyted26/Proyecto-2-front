import { Component } from '@angular/core';
import { Data } from '@angular/router';

import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})

export class SentimentAnalysisComponent{
  foto: String = "assets/fotocompu2.png";
  sentimiento: String = "";
  
  data_busqueda: Data;

  constructor(private sentiment: SentimentAnalysisService) {}

  ngOnInit(): void{ 
  }
  
  //Recibe los datos de la consulta al back, de parte del componente hijo
  receiveMessage($event: Data) {
    console.log("MENSAJE RECIBIDO")
    console.log($event)
    this.data_busqueda = $event
  }

}



