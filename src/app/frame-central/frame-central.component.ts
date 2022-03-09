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
  "Este es el primer titulo","Y el primer texto asdf asf asdf afs"),
  new CardInfoModel("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
  "Este es el segundo titulo","Y el segundo texto"),
  new CardInfoModel("https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg",
  "Este es el segundo titulo","Y el segundo texto"),
];

  constructor() { }

  ngOnInit(): void {
    
  }
  
}
