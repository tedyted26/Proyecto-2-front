import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-admin',
  templateUrl: './config-admin.component.html',
  styleUrls: ['./config-admin.component.scss']
})
export class ConfigAdminComponent implements OnInit {

  constructor() { }
  valorABC = true;
  valor20Min = true;
  valorElPais = true;
  valorLaSexta = true;
  valorLaVang = true;
  valorLaRazon = false;

  ngOnInit(): void {
  }

}
