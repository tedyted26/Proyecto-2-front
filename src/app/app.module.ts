import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameCentralComponent } from './frame-central/frame-central.component';
import { DescripcionCardComponent } from './descripcion-card/descripcion-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameCentralComponent,
    DescripcionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
