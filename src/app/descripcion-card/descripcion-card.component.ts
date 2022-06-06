import { Component, OnInit, Input } from '@angular/core';

/**
 * Tarjeta con imagen y texto, cargada dinamicamente desde {@link FrameCentralComponent}
 */
@Component({
  selector: 'app-descripcion-card',
  templateUrl: './descripcion-card.component.html',
  styleUrls: ['./descripcion-card.component.scss',"../app.component.scss"]
})

export class DescripcionCardComponent implements OnInit {
  /**
   * Url de la imagen
   */
  @Input("imagen") 
  url_img: String = "";
  /**
   * Título de la tarjeta
   */
  @Input()
  titulo: String = "";
  /**
   * Texto de la tarjeta
   */
  @Input()
  texto: String = "";
  /**
   * Valor de entre 0 y 1, el cual controla si la imagen se encuentra a la derecha o a la izquierda
   */
  @Input()
  c_index: number = 0;
  /**
   * @ignore
   */
  constructor() { }
  /**
   * @ignore
   */
  ngOnInit(): void {
  }

}
