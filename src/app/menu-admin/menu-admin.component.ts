import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { DataExtractionService } from '../services/data-extraction.service';
import { Data } from '@angular/router';
import { UserData } from '../data';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  user_data: UserData;
  constructor(private postData:DataExtractionService){

  }
  ngOnInit(): void {
    this.postData.getDataFromServer().subscribe(
      (result: UserData)=>{
        this.user_data = result;
        console.warn("Resultado del Endpoint:" , result);
        
      
      })
  }


}
