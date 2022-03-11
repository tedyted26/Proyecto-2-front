import { Component, OnInit, Output } from '@angular/core';
import { CardInfoModel } from '../modelos/card-info-model.model';

@Component({
  selector: 'app-frame-central',
  templateUrl: './frame-central.component.html',
  styleUrls: ['./frame-central.component.scss']
})
export class FrameCentralComponent implements OnInit {
  cards_desc = [
    new CardInfoModel("https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
  "Misión","Ahorrar tiempo y dinero a nuestros consumidores a la hora de realizar un viaje además de garantizarles la seguridad que necesitan."),
  new CardInfoModel("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
  "Visión","Convertirse en la plataforma de organización de viajes número uno de españa en cuanto al cuidado y atención al cliente gracias a nuestro análisis intensivo de los destinos con respecto a las necesidades de cada usuario."),
  new CardInfoModel("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
  "Valores","Inclusión social, respeto al individuo, seguridad del cliente, facilidad de trámites."),
];

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
