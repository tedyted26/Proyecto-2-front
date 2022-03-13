import { Component, OnInit, Output } from '@angular/core';
import { CardInfoModel } from '../modelos/card-info-model.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-frame-central',
  templateUrl: './frame-central.component.html',
  styleUrls: ['./frame-central.component.scss']
})
export class FrameCentralComponent implements OnInit {
  cards_desc = [
    new CardInfoModel("https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Misión","Queremos garantizar la seguridad y comodidad de nuestros clientes a la hora de viajar, sobretodo a aquellos pertenecientes a colectivos sociales vulnerables propensos a ser víctimas de discriminaciones o delitos de odio."),
  new CardInfoModel("https://media.istockphoto.com/photos/concept-picture-id872670490?k=20&m=872670490&s=612x612&w=0&h=2LVHEll6P7oryjVTqcJemHSjuvxersY29Nn5J0BZGik=",
  "Visión","Nos basamos en la inteligencia artificial y el análisis de sentimiento para determinar si las comunidades de los destinos escogidos por nuestros clientes pueden afectar negativamente a su integridad."),
  new CardInfoModel("https://images.pexels.com/photos/7479659/pexels-photo-7479659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Valores","Para nosotros siempre serán prioridades la inclusión social, el respeto al individuo, la seguridad y comodidad del cliente, la facilidad de trámites y la accesibilidad de nuestros servicios."),
];

//https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
