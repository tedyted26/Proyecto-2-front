import { Component, OnInit } from '@angular/core';
import { IntegranteModel } from '../modelos/integrante-info-model.model';

@Component({
  selector: 'app-seccion-equipo',
  templateUrl: './seccion-equipo.component.html',
  styleUrls: ['./seccion-equipo.component.scss']
})
export class SeccionEquipoComponent implements OnInit {
  integrantes = [
    new IntegranteModel("assets/images/VictorArribas.jpeg", "Víctor Arribas", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("assets/images/SantiagoBarreiro.jpg", "Santiago Barreiro", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("https://cdn-icons-png.flaticon.com/512/1361/1361728.png", "Teodora Nikolaeva", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("assets/images/DavidSanJose.jpeg", "David San José", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("https://cdn-icons-png.flaticon.com/512/1361/1361728.png", "Andrés Felipe Pérez", "Jefe de equipo", "Estoy a tope")
];
  constructor() { }

  ngOnInit(): void {
  }

}
