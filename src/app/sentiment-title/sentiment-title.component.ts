import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-sentiment-title',
  templateUrl: './sentiment-title.component.html',
  styleUrls: ['./sentiment-title.component.scss']
})
export class SentimentTitleComponent implements OnInit {

  array_prueba: string[] = ['White', 'Black', 'Green', 'Blue', 'Yellow', 'Red'];
  puebloSeleccionado = "West Josianne"

  control = new FormControl();
  filArray!: Observable<string[]>;

  @Output() messageEvent = new EventEmitter<Data>();
  data_busqueda: Data;
  n_tweets_analizados = "";

  constructor(private sentiment: SentimentAnalysisService) {}

  ngOnInit(): void {
    //o aqui (api)
    this.filArray = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(val => this._filter(val))
    );
  }

  private _filter(val: string): string[] {
    const formatVal = val.toLocaleLowerCase();
//si hay llamada a api para pillar los autocompletados hay que pillarlos aqui
    return this.array_prueba.filter(palabra => palabra.toLocaleLowerCase().indexOf(formatVal) === 0);
  }

  //Click boton

  analizarPueblo(){
    console.log("ANALIZANDO")
    this.sentiment.getDataFromBackend(this.puebloSeleccionado).subscribe(
      (response: Data) => {
        this.data_busqueda = response;
        this.n_tweets_analizados = response["twitter"]["numero_tweets"];

        this.messageEvent.emit(this.data_busqueda)
        console.log(response)
      },
      (error:any) => console.log(error),
      () => console.log("Se ha terminado el proceso")
    );
  }

  

}
