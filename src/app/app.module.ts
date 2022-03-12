import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameCentralComponent } from './frame-central/frame-central.component';
import { DescripcionCardComponent } from './descripcion-card/descripcion-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { SeccionEquipoComponent } from './seccion-equipo/seccion-equipo.component';
import { TarjetaIntegranteComponent } from './tarjeta-integrante/tarjeta-integrante.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { HttpClientModule } from '@angular/common/http';



import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
   { path: 'home', component: FrameCentralComponent},
   { path: 'Sentimiento', component: SentimentAnalysisComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    FrameCentralComponent,
    DescripcionCardComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeCardComponent,
    SeccionEquipoComponent,
    TarjetaIntegranteComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MatToolbarModule,
    MatButtonModule,

    HttpClientModule,

    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
