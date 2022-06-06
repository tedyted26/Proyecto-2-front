import { Component, OnInit, Input } from '@angular/core';
import { CardNoticiaModel } from '../modelos/card-noticia-model';

/**
 * Componente tarjeta, que representa cada noticia obtenida de la busqueda. Permite visualizar
 * los datos de la noticia, y acceder a la misma con un click.
 */
@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent implements OnInit {
  /**{@link CardNoticiaModel} con la información de la noticia*/
  @Input() 
  noticia: CardNoticiaModel = new CardNoticiaModel("", "", "", "", "", "");
  /**@ignore */
  constructor() { }
  /**@ignore */
  ngOnInit(): void {
  }

}
