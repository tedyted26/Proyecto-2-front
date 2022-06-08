import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-config-admin',
  templateUrl: './config-admin.component.html',
  styleUrls: ['./config-admin.component.scss']
})
export class ConfigAdminComponent implements OnInit {
  alertaSuccess = "alert alert-success";
  alertaError = "alert alert-danger";

  textoAlerta="";
  tipoAlerta="hidden";

  constructor(private api: ApiService) { }
  valorABC = true;
  valor20Min = true;
  valorElPais = true;
  valorLaSexta = true;
  valorLaVang = true;
  valorLaRazon = false;

  valorABCBBDD = true;
  valor20MinBBDD = true;
  valorElPaisBBDD = true;
  valorLaSextaBBDD = true;
  valorLaVangBBDD = true;
  valorLaRazonBBDD = false;

  //pillarlos de la bbdd
  numeroTelBBDD = "638607525";
  correoBBDD = "tuviajefeliz@gmail.com";
  numeroTel = this.numeroTelBBDD;
  correo = this.correoBBDD;

  ngOnInit(): void {

  }

  guardarPeriodicos(){
    //guardar en la bbdd
    if(this.valorABC == this.valorABCBBDD && this.valor20Min == this.valor20MinBBDD && this.valorElPais == this.valorElPaisBBDD
      && this.valorLaSexta == this.valorLaSextaBBDD && this.valorLaVang == this.valorLaVangBBDD && this.valorLaRazon == this.valorLaRazonBBDD){
      this.textoAlerta = "No hay nada que cambiar, los datos están actualizados.";
      this.tipoAlerta = this.alertaError;
    }
    else{
      this.textoAlerta = "Configuración de búsqueda guardada correctamente.";
      this.tipoAlerta = this.alertaSuccess;
    }
  }


  guardarContacto(){
    if (this.numeroTel.trim() != "" && this.correo.trim() != ""){
      if (this.numeroTel == this.numeroTelBBDD && this.correo == this.correoBBDD){
        this.textoAlerta = "No hay nada que cambiar, los datos están actualizados.";
        this.tipoAlerta = this.alertaError;
      }
      else{
        if(this.correo.includes("@") && (this.correo.endsWith(".com") || this.correo.endsWith(".es")) && this.numeroTel.match(/^[0-9]+$/) != null){
        
          this.api.modData(this.correo, this.numeroTel).subscribe(
            
          );
          this.textoAlerta = "Configuración de contacto guardada correctamente.";
          this.tipoAlerta = this.alertaSuccess;

        }else{
          this.textoAlerta = "Formato incorrecto en uno o más campos.";
          this.tipoAlerta = this.alertaError;
        } 
      }
    }else{
      this.textoAlerta = "Uno o más campos están vacíos.";
      this.tipoAlerta = this.alertaError;
    }

  }

}
