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
  alertaSuccess = "alert alert-success";
  alertaError = "alert alert-danger";

  textoAlerta="";
  tipoAlerta="hidden";

  nombre="";
  correo="";
  cont = "";
  cont2 = "";


  ngOnInit(): void {
  };

  constructor(private apiService: ApiService, private sentServ: SentimentAnalysisService) { };

  registrarAdmin(){
    //TODO comprobar si existe en la bbdd
    

    if (this.nombre.trim() != "" && this.correo.trim() != "" && this.cont.trim() != "" && this.cont2.trim() != ""){
      if (this.correo.includes('@') && 
        (this.correo.endsWith(".com") || this.correo.endsWith(".es"))){
        if (this.cont == this.cont2){

          //TODO primero comprobar si existe en BBDD
          
          this.apiService.register(this.nombre,this.correo,this.cont).subscribe(
            (response: Data) => {
               console.log("Registro intentado")
               console.log(response)
             },
            (error:any) => console.log(error),
            () => console.log("Se ha terminado el proceso")
            );
          
          
          this.textoAlerta = "Administrador creado con éxito.";
          this.tipoAlerta = this.alertaSuccess;


        }else{
          this.textoAlerta = "Las contraseñas no coinciden.";
          this.tipoAlerta = this.alertaError;
        }
      }else{
        this.textoAlerta = "Formato de correo incorrecto.";
        this.tipoAlerta = this.alertaError;
      }
    }else{
      this.textoAlerta = "Uno o más campos están vacíos.";
      this.tipoAlerta = this.alertaError;
    }
  }
}
