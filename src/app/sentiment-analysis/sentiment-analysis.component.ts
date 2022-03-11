import { Component, Input, OnInit } from '@angular/core';

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

  
  constructor() { }

  ngOnInit(): void {
  }

}
