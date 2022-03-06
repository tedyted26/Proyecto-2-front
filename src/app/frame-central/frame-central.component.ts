import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-frame-central',
  templateUrl: './frame-central.component.html',
  styleUrls: ['./frame-central.component.scss']
})
export class FrameCentralComponent implements OnInit {

  url_imagen = "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg";
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
