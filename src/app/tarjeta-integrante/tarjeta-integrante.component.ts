import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-integrante',
  templateUrl: './tarjeta-integrante.component.html',
  styleUrls: ['./tarjeta-integrante.component.scss']
})
export class TarjetaIntegranteComponent implements OnInit {
  @Input("foto") 
  foto: String = "";

  @Input()
  nombre: String = "";
  @Input()
  rol: String = "";
  @Input()
  motivacion: String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
