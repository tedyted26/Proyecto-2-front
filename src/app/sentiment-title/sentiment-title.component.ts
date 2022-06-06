import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
import { Data } from '@angular/router';


/**
 * Componente encargado de la busqueda de las provincias,
 * el cual se encarga de llamar a la clase {@link SentimentAnalysisService} para 
 * obtener los tweets y noticias del back. Tras esto, reenvia mediante eventos esta 
 * información al componente padre {@link SentimentAnalisisComponent}
 */
@Component({
  selector: 'app-sentiment-title',
  templateUrl: './sentiment-title.component.html',
  styleUrls: ['./sentiment-title.component.scss']
})

export class SentimentTitleComponent implements OnInit {
  /**
   * Array con todas las provincias de españa
   */
  array_provincias: string[] = ["A Coruña","Albacete","Alicante","Almería",
  "Asturias","Álava","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cantabria",
  "Castellón","Ceuta","Ciudad Real","Cuenca","Cáceres","Cádiz",
  "Córdoba","Girona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén",
  "La Rioja","Las Palmas","León","Lleida","Lugo","Madrid","Melilla","Murcia","Málaga",
  "Navarra","Ourense","Palencia","Pontevedra","SC. Tenerife","Salamanca","Segovia","Sevilla",
  "Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza"];
  puebloSeleccionado = ""

  control = new FormControl();
  filArray!: Observable<string[]>;

  @Output() messageEvent = new EventEmitter<Data>();
  data_busqueda: Data;
  /**
   * 
   * @ignore
   */
  constructor(private sentiment: SentimentAnalysisService) {}

  ngOnInit(): void {

    //o aqui (api)
    this.filArray = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(val => this._filter(val))
    );
  }
  /**
   * Filtro de provincias por predicción, para mostrar en la barra
   * de busqueda
   * @param val string 
   * @returns Devuelve el arrayde tipo string[] de provincias que coinciden con la
   * predicción del teclado
   */
  private _filter(val: string): string[] {
    const formatVal = val.toLocaleLowerCase();
    return this.array_provincias.filter(palabra => palabra.toLocaleLowerCase().indexOf(formatVal) === 0);
  }

  /**
   * Llamado al realizar la busqueda de la provincia.
   * Envia la busqueda al back y envia los datos (json con la
   * información de los tweets y noticias) al padre {@link SentimentAnalisisComponent}
   */
  analizarPueblo(){
    console.log("ANALIZANDO")
    this.sentiment.getDataFromBackend(this.puebloSeleccionado).subscribe(
      (response: Data) => {
        this.data_busqueda = response;
        console.log(response)
        
        this.messageEvent.emit(this.data_busqueda)
      },
      (error:any) => console.log(error),
      () => console.log("Se ha terminado el proceso")
    );
  }


}
