import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Injectable } from '@angular/core';
import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
import { Data } from '../data';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})


export class RegistroComponent implements OnInit {
  ngOnInit(): void {
  };

  constructor(private apiService: ApiService, private sentServ: SentimentAnalysisService) { };

  registrarAdmin(){
    this.apiService.register("yago","yago@gmail.com","123456").subscribe(
      (response: Data) => {
        console.log("Registro intentado")
        console.log(response)
      },
      (error:any) => console.log(error),
      () => console.log("Se ha terminado el proceso")
    );
  }
  

  url ="/home";

}
