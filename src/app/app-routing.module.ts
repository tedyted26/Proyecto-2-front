import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameCentralComponent } from './frame-central/frame-central.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
>>>>>>> b8ad584e8579d944a10ca15d142c4a616253e66b
import { PaginaError404Component } from './pagina-error404/pagina-error404.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroComponent } from './registro/registro.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "Login"},
   { path: 'home', component: FrameCentralComponent},
   { path: 'Sentimiento', component: SentimentAnalysisComponent},
   { path: 'QuienesSomos', component: QuienesSomosComponent},
   { path: 'Error', component: PaginaError404Component},
<<<<<<< HEAD
   { path: 'Login', component: LoginComponent},
   { path: 'Registro', component: RegistroComponent},
=======
   { path: 'Admin', component: MenuAdminComponent},
>>>>>>> b8ad584e8579d944a10ca15d142c4a616253e66b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
