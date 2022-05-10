import { Component, OnInit } from '@angular/core';
import { CardNoticiaModel } from '../modelos/card-noticia-model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  news_model = [
  new CardNoticiaModel("0","https://www.elmundo.es/deportes/2022/05/10/627a61e521efa07a528b45b4.html", "Titulo", "El subtitulo más impresionante", "20/12/2022", "132"),
  new CardNoticiaModel("1","http:...", "Titulo 2", "El subtitulo menos impresionante", "11/12/2022", "222"),
  new CardNoticiaModel("1","http:...", "Titulo 2", "El subtitulo menos impresionante", "11/12/2022", "222"),
  new CardNoticiaModel("1","http:...", "Titulo 2", "El subtitulo menos impresionante", "11/12/2022", "222")
];
  constructor() { }

  ngOnInit(): void {
  }

  abrirEnlaceNoticia(i: String): void{
    window.open(i.toString(), "_blank");
  }

}
