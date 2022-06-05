import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Data } from '@angular/router';
import { CardNoticiaModel } from '../modelos/card-noticia-model';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  news_model = [
  new CardNoticiaModel("0","https://www.elmundo.es/deportes/2022/05/10/627a61e521efa07a528b45b4.html", "Titulo", "El subtitulo más impresionante", "20/12/2022", "132"),
  new CardNoticiaModel("1","http:...", "Titulo 2", "El subtitulo menos impresionante", "11/12/2022", "222"),
  new CardNoticiaModel("1","http:...", "Titulo 2", "El subtitulo menos impresionante", "11/12/2022", "222"),
  new CardNoticiaModel("1","http:...", "Titulo 2", "El subtitulo menos impresionante", "11/12/2022", "222")
];

  @Input()
  data_busqueda: Data;
  
  //DATOS DEL CHART
  dataNoticias = [20, 80];
  backgroundColorNoticias = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.7)'];
  borderColorNoticias = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235)'];

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart("pieChartNoticias", this.dataNoticias, ["Noticias sobre delitos de odio", "Resto de noticias"], this.backgroundColorNoticias, this.borderColorNoticias);
  }

  abrirEnlaceNoticia(i: String): void{
    window.open(i.toString(), "_blank");
  }

  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // Extract changes to the input property by its name
    for (let propName in changes) {
      let change: SimpleChange = changes[propName];
      let curVal  = JSON.stringify(change["currentValue"]);

      if (curVal){
        this.data_busqueda = JSON.parse( curVal);
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
