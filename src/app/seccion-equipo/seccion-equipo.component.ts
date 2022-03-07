import { Component, OnInit } from '@angular/core';
import { IntegranteModel } from '../modelos/integrante-info-model.model';

@Component({
  selector: 'app-seccion-equipo',
  templateUrl: './seccion-equipo.component.html',
  styleUrls: ['./seccion-equipo.component.scss']
})
export class SeccionEquipoComponent implements OnInit {
  integrantes = [
    new IntegranteModel("https://cdn-icons-png.flaticon.com/512/1361/1361728.png", "Santiago Barreiro", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("https://cdn-icons-png.flaticon.com/512/1361/1361728.png", "2Santiago Barreiro", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("https://cdn-icons-png.flaticon.com/512/1361/1361728.png", "3Santiago Barreiro", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("https://cdn-icons-png.flaticon.com/512/1361/1361728.png", "4Santiago Barreiro", "Jefe de equipo", "Estoy a tope"),
    new IntegranteModel("https://cdn-icons-png.flaticon.com/512/1361/1361728.png", "5Santiago Barreiro", "Jefe de equipo", "Estoy a tope")
];
  constructor() { }

  ngOnInit(): void {
  }

}
