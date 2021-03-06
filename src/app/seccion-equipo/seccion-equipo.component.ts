import { Component, OnInit } from '@angular/core';
import { IntegranteModel } from '../modelos/integrante-info-model.model';

@Component({
  selector: 'app-seccion-equipo',
  templateUrl: './seccion-equipo.component.html',
  styleUrls: ['./seccion-equipo.component.scss']
})
export class SeccionEquipoComponent implements OnInit {
  integrantes = [
    new IntegranteModel("assets/images/VictorArribas.jpeg", "Víctor Arribas", "Jefe de Relaciones Comerciales", "Realizar una aplicación que incluso pueda salir al mercado y que sea realmente utilizable y bonita; afianzar y obtener más conocimientos sobre el análisis de sentimiento, web scraping, Angular, etc."),
    new IntegranteModel("assets/images/SantiagoBarreiro.jpg", "Santiago Barreiro", "Mánager de Comunidad", "Muy interesado en el diseño de aplicaciones web y móviles y en el campo de la inteligencia artificial. Gran fanático de asignaturas de tipo Proyecto donde poder desarrollar aptitudes como el trabajo en equipo, la organización y la creatividad."),
    new IntegranteModel("assets/images/TeodoraNikolaeva.jpeg", "Teodora Nikolaeva", "Directora de Marketing", "Llegar a ver el trabajo del semestre anterior convertirse en algo mayor y aplicado a un propósito más real. Me interesa especialmente aprender Angular y crear un buen diseño."),
    new IntegranteModel("assets/images/DavidSanJose.jpeg", "David San José", "Diseñador Web", "Me llama en gran medida el aprender a generar una app completa mediante la unión de back y front. A parte, tengo un cariño especial a Angular (Lo usé durante las prácticas de FP)"),
    new IntegranteModel("assets/images/AndresFelipePerez.jpeg", "Andrés Felipe Pérez", "Ingeniero de Software", "Me encanta programar y desarrollar inteligencia artificial. Sería interesante sacar este proyecto a producción.")
];
  constructor() { }

  ngOnInit(): void {
  }

}
