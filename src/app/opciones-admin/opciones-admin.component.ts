import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { UserData } from '../data';

@Component({
  selector: 'app-opciones-admin',
  templateUrl: './opciones-admin.component.html',
  styleUrls: ['./opciones-admin.component.scss']
})
export class OpcionesAdminComponent implements OnInit {

  constructor() { }

  @Input()
  user_data: UserData

  email: any;

  name: any;

  ngOnInit(): void {

  }
  ngOnChanges(changes: { [property: string]: SimpleChange }){
    this.name = this.user_data.name
    this.email = this.user_data.email
  }
  displayEstad = false;
  onPress() {
    this.displayEstad = true;
   /*if you want the component to show and hide on click pressed, use 
   use this line
   this.display = !this.display;*/
 }

}
