import { Component, OnInit } from '@angular/core';
import { MenuAdminComponent } from '../menu-admin/menu-admin.component';

@Component({
  selector: 'app-opciones-admin',
  templateUrl: './opciones-admin.component.html',
  styleUrls: ['./opciones-admin.component.scss']
})
export class OpcionesAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayEstad = false;
  onPress() {
    this.displayEstad = true;
   /*if you want the component to show and hide on click pressed, use 
   use this line
   this.display = !this.display;*/
 }

}
