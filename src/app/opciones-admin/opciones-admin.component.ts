import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-admin',
  templateUrl: './opciones-admin.component.html',
  styleUrls: ['./opciones-admin.component.scss']
})
export class OpcionesAdminComponent implements OnInit {

  constructor() { }
  email: any;
  name: any;

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');
  }
  displayEstad = false;
  onPress() {
    this.displayEstad = true;
   /*if you want the component to show and hide on click pressed, use 
   use this line
   this.display = !this.display;*/
 }

}
