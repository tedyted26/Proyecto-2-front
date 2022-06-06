import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-estad-admin',
  templateUrl: './estad-admin.component.html',
  styleUrls: ['./estad-admin.component.scss']
})
export class EstadAdminComponent implements OnInit {

  //DATOS DE LOS CHARTS
  dataPolaridad = [60, 40];
  backgroundColorPolaridad = ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.7)'];
  borderColorPolaridad = ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235)'];

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.createChart("busquedas-localidad", this.dataPolaridad, ["Tweets positivos", "Tweets negativos"], this.backgroundColorPolaridad, this.borderColorPolaridad);
  }

  createChart(idChart: any, data: Array<Number>, labels:  Array<String>, backgroundColor:  any, borderColor: any){
    new Chart(idChart, {
     type: 'bar',
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
