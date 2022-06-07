import { Component, OnInit } from '@angular/core';
import {Chart, registerables, Scale} from 'chart.js';
import { DataExtractionService } from '../services/data-extraction.service';

@Component({
  selector: 'app-estad-admin',
  templateUrl: './estad-admin.component.html',
  styleUrls: ['./estad-admin.component.scss']
})
export class EstadAdminComponent implements OnInit {

  //DATOS DE LOS CHARTS
  
  labelsLocalidad = ["A Coruña","Albacete","Alicante","Almería",
  "Asturias","Álava","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cantabria",
  "Castellón","Ceuta","Ciudad Real","Cuenca","Cáceres","Cádiz",
  "Córdoba","Girona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén",
  "La Rioja","Las Palmas","León","Lleida","Lugo","Madrid","Melilla","Murcia","Málaga",
  "Navarra","Ourense","Palencia","Pontevedra","SC. Tenerife","Salamanca","Segovia","Sevilla",
  "Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza"];
  backgroundColorBusquedaLocalidad = ['rgba(255, 99, 132, 0.7)', 
  'rgba(54, 162, 235, 0.7)', 
  'rgba(255, 206, 86, 0.7)',];
  borderColorBusquedaLocalidad = ['rgba(255, 99, 132)', 
  'rgba(54, 162, 235)',  
  'rgba(255, 206, 86)',];

  dataNumOdio = [100, 40, 60, 40, 60, 40];
  backgroundColorOdioLocalidad = [
  'rgba(75, 192, 192, 0.7)',
  'rgba(153, 102, 255, 0.7)',
  'rgba(255, 159, 64, 0.7)'];
  borderColorOdioLocalidad = [
  'rgba(75, 192, 192)',
  'rgba(153, 102, 255)',
  'rgba(255, 159, 64)'];

  constructor(private postData:DataExtractionService) { }
  
  chart_busquedas:Chart<"bar", Number[], String>;
  chart_odio:Chart<"bar", Number[], String>;

  provincias_data: any;

  ngOnInit(): void {
    Chart.register(...registerables);
   
  
    this.postData.getGraphicsData().subscribe(
      (result: any)=>{

      this.provincias_data = result.localidad;
      console.warn("Resultado del Endpoint:" , result);
      let dataBusquedas: number[] = [];

      console.log(typeof(result))
      this.provincias_data.forEach( (prov: any) => {
        if (prov){
          dataBusquedas.push(prov.visitas_totales)
        }else{
          dataBusquedas.push(0)
        }
        
      });

      let odio_data = result.odio;

      this.chart_busquedas = this.createChart("busquedas-localidad", dataBusquedas, this.labelsLocalidad, this.backgroundColorBusquedaLocalidad, this.borderColorBusquedaLocalidad);
      this.chart_odio = this.createChart("odio-localidad", odio_data, this.labelsLocalidad, this.backgroundColorOdioLocalidad, this.borderColorOdioLocalidad);
      
    })

   
  }

  createChart(idChart: any, data: Array<Number>, labels:  Array<String>, backgroundColor:  any, borderColor: any){
    return new Chart(idChart, {
     type: 'bar',
     data: {
         labels: labels,
         datasets: [{
             data: data,
             backgroundColor: backgroundColor,
             borderColor: borderColor,
             borderWidth: 1
         }],
     },
     options: {
      indexAxis : 'x',
      scales : {
        x: {
          ticks: {
            autoSkip : false,
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      } 
     }
 });
 }

}
