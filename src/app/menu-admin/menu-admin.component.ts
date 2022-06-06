import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {
  currentUser: any;
  token: any;
  email: any;
  name: any;
  
  ngOnInit(): void {
    this.currentUser = localStorage.getItem('user_auth');
    this.email = localStorage.getItem('email');
    this.name = localStorage.getItem('name');
  }


}
