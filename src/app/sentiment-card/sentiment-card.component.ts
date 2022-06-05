import { Component, OnInit , Input, SimpleChange} from '@angular/core';
import { Data } from '@angular/router';
import {Chart, registerables} from 'chart.js';


@Component({
  selector: 'app-sentiment-card',
  templateUrl: './sentiment-card.component.html',
  styleUrls: ['./sentiment-card.component.scss']
})
export class SentimentCardComponent implements OnInit {

  @Input()
  data_busqueda: Data;
  

  n_tweets = 0
  polaridad = 0.
  subjetividad = 0.

  //DATOS DE LOS CHARTS
  dataPolaridad = [60, 40];
  backgroundColorPolaridad = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.7)'];
  borderColorPolaridad = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235)'];

  dataSubjetividad = [30, 70];
  backgroundColorSubjetividad = ['rgba(153, 102, 255, 0.5)', 'rgba(255, 206, 86, 0.5)'];
  borderColorSubjetividad = ['rgba(153, 102, 255, 0.8)', 'rgba(255, 206, 86, 0.8)'];


  constructor() {}

  ngOnInit() {
    Chart.register(...registerables);
    this.createChart("pieChartPolaridad", this.dataPolaridad, ["Tweets positivos", "Tweets negativos"], this.backgroundColorPolaridad, this.borderColorPolaridad);
    this.createChart("pieChartSubjetividad", this.dataSubjetividad, ["Tweets objetivos", "Tweets subjetivos"], this.backgroundColorSubjetividad, this.borderColorSubjetividad);
    
  }

  set_variables(){
    this.n_tweets = this.data_busqueda["twitter"]["numero_tweets"]
    this.polaridad = this.data_busqueda["twitter"]["polaridad"]
    this.subjetividad = this.data_busqueda["twitter"]["subjetividad"]
  }
  
  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // Extract changes to the input property by its name
    for (let propName in changes) {

      let change: SimpleChange = changes[propName];
      let curVal  = JSON.stringify(change["currentValue"]);
      console.log(curVal)
      if (curVal){
        this.data_busqueda = JSON.parse( curVal);
        this.set_variables()
      }
      else
        console.log("Valor indefinido")

      
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
