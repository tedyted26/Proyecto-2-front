import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameCentralComponent } from './frame-central/frame-central.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
   { path: 'home', component: FrameCentralComponent},
   { path: 'Sentimiento', component: SentimentAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
