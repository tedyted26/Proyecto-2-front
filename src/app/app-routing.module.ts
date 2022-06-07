import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigAdminComponent } from './config-admin/config-admin.component';
import { EstadAdminComponent } from './estad-admin/estad-admin.component';
import { FrameCentralComponent } from './frame-central/frame-central.component';

import { LoginComponent } from './login/login.component';

import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { PaginaError404Component } from './pagina-error404/pagina-error404.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: FrameCentralComponent},
   { path: 'Sentimiento', component: SentimentAnalysisComponent},
   { path: 'QuienesSomos', component: QuienesSomosComponent},
   { path: 'Error', component: PaginaError404Component},

   { path: 'Login', component: LoginComponent},

   { path: 'Admin', component: MenuAdminComponent, children: [
    { path: "", outlet: "opcionesAdmin", component: ConfigAdminComponent},
    { path: "Configuracion", outlet: "opcionesAdmin", component: ConfigAdminComponent},
    { path: "Estadisticas", outlet: "opcionesAdmin", component: EstadAdminComponent},
    { path: "RegistrarAdmin", outlet: "opcionesAdmin", component: RegistroComponent},
   ]},
   { path: '**', redirectTo: 'Error', pathMatch: 'full'},

   
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
