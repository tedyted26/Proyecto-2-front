import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion-card',
  templateUrl: './descripcion-card.component.html',
  styleUrls: ['./descripcion-card.component.scss',"../app.component.scss"]
})
export class DescripcionCardComponent implements OnInit {
  @Input("imagen") 
  url_img: String = "";

  @Input()
  titulo: String = "";
  @Input()
  texto: String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
