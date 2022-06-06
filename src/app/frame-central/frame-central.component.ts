import { Component, OnInit, Output } from '@angular/core';
import { CardInfoModel } from '../modelos/card-info-model.model';


/**
 * Componente cargado con la ruta {@link http://localhost:4200/home}.
 * 
 * Contiene los componentes {@link WelcomeCardComponent} y las tarjetas cargadas dinamicamente
 * {@link DescriptionCardComponent}
 */
@Component({
  selector: 'app-frame-central',
  templateUrl: './frame-central.component.html',
  styleUrls: ['./frame-central.component.scss']
})

export class FrameCentralComponent implements OnInit {
  /**
   * Lista con la información para cargar en los componentes generedos mediante
   *  un *ngFor {@link DescriptionCardComponent}.
   * 
   * La lista contiene instancias de {@link CardInfoModel}
   */
  cards_desc = [
    new CardInfoModel("https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Misión","Queremos garantizar la seguridad y comodidad de nuestros clientes a la hora de viajar, sobretodo a aquellos pertenecientes a colectivos sociales vulnerables propensos a ser víctimas de discriminaciones o delitos de odio."),
  new CardInfoModel("https://media.istockphoto.com/photos/concept-picture-id872670490?k=20&m=872670490&s=612x612&w=0&h=2LVHEll6P7oryjVTqcJemHSjuvxersY29Nn5J0BZGik=",
  "Visión"," El análisis de sentimiento es una técnica que se apoya en el análisis de textos, la lingüistica y la inteligencia artificial para detectar las intenciones detrás de un mensaje. Nuestro objetivo es basarnos en estas tecnologías para determinar si las comunidades de los destinos escogidos por nuestros clientes pueden afectar negativamente a su estancia e integridad."),
  new CardInfoModel("https://images.pexels.com/photos/7479659/pexels-photo-7479659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Valores","Para nosotros siempre serán prioridad las personas. Para ello la inclusión social, el respeto al individuo, seguridad, comodidad, la facilidad de los trámites y la accesibilidad de nuestros servicios serán siempre una garantía para nuestros clientes."),
];

  /**
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit(): void {}
  
}
