import { Component } from '@angular/core';
import { Data } from '@angular/router';

import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
/**
 * Componente padre llamado con la ruta {@link http://localhost:4200/Sentimiento}.
 * 
 * Contiene los componentes {@link SentimentTitleComponent}, 
 * {@link SentimentCardComponent}, {@link NewsCardComponent} y
 * {@link SentimentHelpComponent}
 */
@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})

export class SentimentAnalysisComponent{
  /**
   * Data de la busqueda, la cual se pasa a los componentes hijos
   * {@link SentimentCardComponent} y {@link NewsCardComponent}
   */
  data_busqueda: Data;
  /**
   * Constructor
   * @param sentiment 
   */
  constructor(private sentiment: SentimentAnalysisService) {}
  /**@ignore */
  ngOnInit(): void{ 
  }
  
  /**
   * Recibe los datos de la consulta al back, de parte
   *  del componente hijo
   * @param $event 
   */
  receiveMessage($event: Data) {
    console.log("MENSAJE RECIBIDO")
    console.log($event)
    this.data_busqueda = $event
  }

}



