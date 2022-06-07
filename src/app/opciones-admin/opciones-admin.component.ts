import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-admin',
  templateUrl: './opciones-admin.component.html',
  styleUrls: ['./opciones-admin.component.scss']
})
export class OpcionesAdminComponent implements OnInit {

  constructor() { }
  currentUser: any;
  token: any;
  email: any;
  name: any;

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('user_auth');
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');
    this.name = "Ana"
    this.email = "ana@mail.com"
  }
  displayEstad = false;
  onPress() {
    this.displayEstad = true;
   /*if you want the component to show and hide on click pressed, use 
   use this line
   this.display = !this.display;*/
 }

}
