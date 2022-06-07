import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit , Input, SimpleChange} from '@angular/core';
import { Data } from '@angular/router';
import {Chart, registerables} from 'chart.js';

/**
 * Componente que muestra los datos y graficos de la busqueda de tweets.
 */
@Component({
  selector: 'app-sentiment-card',
  templateUrl: './sentiment-card.component.html',
  styleUrls: ['./sentiment-card.component.scss']
})
export class SentimentCardComponent implements OnInit {
  /**Datos de la busqueda, provenientes del padre {@link SentimentAnalysisComponent} */
  @Input()
  data_busqueda: Data;
  
  /**Numero de tweets encontrados en la busqueda */
  n_tweets = 0
  /**
   * Indice de la positividad o negatividad de los tweets.
   * Puede tomar valores entre -1 y 1.
   * */
  polaridad = 0.
  /**
   * Indice de la objetividad de los tweets.
   * Puede tomar valores entre -1 y 1.
   * */
  subjetividad = 0.
  /**
   * Lugar de la busqueda
   * */
  lugar = "Provincia"


  /**Grafica de polaridad */
  chart_Polaridad: Chart<"pie", Number[], String>;
  /**Datos de la gráfica de polaridad */
  dataPolaridad = [60, 40];
  /**Color de la gráfica de polaridad*/
  backgroundColorPolaridad = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.7)'];
  /**Borde de la gráfica de polaridad*/
  borderColorPolaridad = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235)'];

  /**Grafica de subjetividad */
  chart_Subjetividad: Chart<"pie", Number[], String>;
  /**Datos de la gráfica de subjetividad */
  dataSubjetividad = [30, 70];
  /**Color de la gráfica de subjetividad*/
  backgroundColorSubjetividad = ['rgba(153, 102, 255, 0.5)', 'rgba(255, 206, 86, 0.5)'];
  /**Borde de la gráfica de subjetividad*/
  borderColorSubjetividad = ['rgba(153, 102, 255, 0.8)', 'rgba(255, 206, 86, 0.8)'];

  /**@ignore */
  constructor() {}

  /**
   * Llama a la creación de las gráficas.
   */
  ngOnInit() {
    Chart.register(...registerables);
    this.chart_Polaridad = this.createChart("pieChartPolaridad", this.dataPolaridad, ["Tweets positivos", "Tweets negativos"], this.backgroundColorPolaridad, this.borderColorPolaridad);
    this.chart_Subjetividad =this.createChart("pieChartSubjetividad", this.dataSubjetividad, ["Tweets objetivos", "Tweets subjetivos"], this.backgroundColorSubjetividad, this.borderColorSubjetividad);
    
  }
  /**
   * setter de las variables de los tweets
   */
  set_variables(){
    this.n_tweets = this.data_busqueda["twitter"]["numero_tweets"]
    this.polaridad = this.data_busqueda["twitter"]["polaridad"]
    this.subjetividad = this.data_busqueda["twitter"]["subjetividad"]
    this.lugar = this.data_busqueda["lugar"]

    let pol_graf = 100 * (this.polaridad + 1) /2;
    this.chart_Polaridad.data.datasets[0].data = [pol_graf, 100 - pol_graf];
    this.chart_Polaridad.update();

    let sub_graf = Math.abs(100 * this.subjetividad)
    this.chart_Subjetividad.data.datasets[0].data = [100 - sub_graf, sub_graf];
    this.chart_Subjetividad.update();
  }
  /**
   * Toma los valores de los datos recibidos por
   * el padre, actualizando cuando hay algún cambio.
   * @param changes 
   */
  ngOnChanges(changes: { [property: string]: SimpleChange }){
    // Extract changes to the input property by its name
    for (let propName in changes) {

      let change: SimpleChange = changes[propName];
      let curVal  = JSON.stringify(change["currentValue"]);
      

      if (curVal){
        this.data_busqueda = JSON.parse( curVal);
        this.set_variables()
      }
      else
        console.log("Valor indefinido")


      
    }
  }
  /**
   * Crea un gráfico de tarta
   * @param idChart 
   * @param data 
   * @param labels 
   * @param backgroundColor 
   * @param borderColor 
   */
  createChart(idChart: any, data: Array<Number>, labels:  Array<String>, backgroundColor:  any, borderColor: any){
    let a = new Chart(idChart, {
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

    return a
  }

}
