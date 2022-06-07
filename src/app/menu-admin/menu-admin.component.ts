import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { DataExtractionService } from '../services/data-extraction.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  
  constructor(private postData:DataExtractionService){

  }
  ngOnInit(): void {
    this.postData.getDataFromServer().subscribe((result)=>console.warn("Resultado del Endpoint:" , result))
  }


}
