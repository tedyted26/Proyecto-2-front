import { Component, OnInit, Input } from '@angular/core';
import { CardNoticiaModel } from '../modelos/card-noticia-model';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.scss']
})
export class NoticiaCardComponent implements OnInit {
  @Input() 
  noticia: CardNoticiaModel = new CardNoticiaModel("", "", "", "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
