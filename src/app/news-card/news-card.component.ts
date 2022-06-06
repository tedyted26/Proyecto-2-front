import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Data } from '@angular/router';
import { CardNoticiaModel } from '../modelos/card-noticia-model';
import {Chart, registerables} from 'chart.js';

/**
 * Componente que reune las noticias resultantes de la busqueda, junto con un gráfico de
 * tarta.
 */
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  /**
   * Array de {@link CardNoticiaModel}, donde se almacenan las noticias.
   */
  news_model: CardNoticiaModel[] = [];
  /**Datos de la busqueda */
  @Input()
  data_busqueda: Data;
  
  /**Datos de la gráfica */
  dataNoticias = [20, 80];
  /**Color de la gráfica */
  backgroundColorNoticias = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.7)'];
  /**Borde de la gráfica */
  borderColorNoticias = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235)'];
  /**@ignore*/
  constructor() { }
  /**
   * Crea la gráfica de tarta
   */
  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart("pieChartNoticias", this.dataNoticias, ["Noticias sobre delitos de odio", "Resto de noticias"], this.backgroundColorNoticias, this.borderColorNoticias);
  }
  /**
   * Abre la url de la noticia en una nueva ventana
   * @param i url de la noticia
   */
  abrirEnlaceNoticia(i: String): void{
    window.open(i.toString(), "_blank");
  }
  /**
   * Actualiza las noticias cuando hay cambios
   * @param changes 
   */
  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // Extract changes to the input property by its name
    for (let propName in changes) {
      let change: SimpleChange = changes[propName];
      let curVal  = JSON.stringify(change["currentValue"]);

      if (curVal){
        this.data_busqueda = JSON.parse( curVal);


        this.news_model = []
        this.data_busqueda["noticias"].forEach((n: { [x: string]: String; }) => {
          
          let tmp_model = new CardNoticiaModel(n["id"],n["url"], n["titulo"], n["subtitulo"], n["fecha_noticia"], "222");
          this.news_model.push(tmp_model)
        });


      }else{ console.log("Valor indefinido")}

      
      console.log(this.data_busqueda)
    }
  }
  /**
   * Crea la gráfica dados los parametros
   * @param idChart 
   * @param data 
   * @param labels 
   * @param backgroundColor 
   * @param borderColor 
   */
  createChart(idChart: any, data: Array<Number>, labels:  Array<String>, backgroundColor:  any, borderColor: any){
    new Chart(idChart, {
     type: 'pie',
     data: {
         labels: labels,
         datasets: [{
             data: data,
             backgroundColor: backgroundColor,
             borderColor: borderColor,
             borderWidth: 1
         }]
     },
 });
 }

}
